'use client'
import styles from './search-movie.module.css'
import React, { useState } from 'react';
import moviesService from '@/app/services/tmdb.api.service';
import { useRouter } from "next/navigation";

const SearchMovie = () => {
    const [nameOfMovie, setNameOfFilm] = useState<string>('');
    const [error, setError] = useState<string>('');
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');
        try {
            const movie = await moviesService.searchMovieByName(nameOfMovie);
            if (!movie) {
                setError('Movie nod found');
            } else {
                router.push(`pages/movies/${movie.id}?movieTitle=${movie.title}`);
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(error.message);
                setError('Problem with searching movie');
            } else {
                console.error('An unknown error occurred:', error);
                setError('An unexpected error occurred.');
            }
        }
    };

    return (
            <div className={styles.container}>
                <h1>Your personal cinema on your device</h1>
                <span>All news in one place</span>
                <p>Ready to watch? Enter name of movie</p>
                <form onSubmit={handleSubmit}>
                    <input
                        required={true}
                        type="text"
                        placeholder="Enter name of movie"
                        value={nameOfMovie}
                        onChange={(e) => setNameOfFilm(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
                {error && <p className={styles.error}>{error}</p>}
            </div>
    );
};

export default SearchMovie;
