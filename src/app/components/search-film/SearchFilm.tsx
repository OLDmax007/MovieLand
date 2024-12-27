'use client'
import styles from './search-film.module.css'
import React, { useState } from 'react';
import moviesService from '@/app/services/tmdb.api.service';
import { useRouter } from "next/navigation";

const SearchFilm = () => {
    const [nameOfFilm, setNameOfFilm] = useState<string>('');
    const [error, setError] = useState<string>('');
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');
        try {
            const movie = await moviesService.searchFilmByName(nameOfFilm);
            if (!movie) {
                setError('Film nod found');
            } else {
                router.push(`pages/movies/${movie.id}?movieTitle=${movie.title}`);
            }
        } catch (err) {
            setError('Problem with searching film');
        }
    };

    return (
        <main>
            <div className={styles.container}>
                <h1>Your personal cinema on your devices</h1>
                <span>All news in one place</span>
                <p>Ready to watch? Enter name of film</p>
                <form onSubmit={handleSubmit}>
                    <input
                        required={true}
                        type="text"
                        placeholder="Enter name of film"
                        value={nameOfFilm}
                        onChange={(e) => setNameOfFilm(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
                {error && <p className={styles.error}>{error}</p>}
            </div>
        </main>
    );
};

export default SearchFilm;
