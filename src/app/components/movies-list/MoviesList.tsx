import React from 'react';
import moviesService from "@/app/services/tmdb.api.service";
import { IMovie } from "@/app/models/IMovie";
import MoviesListCard from "@/app/components/movies-list-card/MoviesListCard";
import styles from './movies-list.module.css';
import Pagination from "@/app/components/pagination/Pagination";

interface MoviesListProps {
    searchParams: {page: string}
}

const MoviesList = async ({ searchParams }: MoviesListProps) => {
    const page = searchParams.page || '1'
    const movies: IMovie[] = (await moviesService.getAllMovies(page)).slice(0,5)

    return (
        <section className={styles.movies}>
            {movies.map((movie: IMovie, index: number) => (
                <MoviesListCard key={index} movie={movie} />
            ))}
            <Pagination/>
        </section>
    );
};

export default MoviesList;
