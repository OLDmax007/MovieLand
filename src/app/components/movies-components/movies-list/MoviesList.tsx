import React from 'react';
import {IMovie} from "@/app/models/IMovie";
import styles from './movies-list.module.css';
import MoviesListCard from "@/app/components/movies-components/movies-list-card/MoviesListCard";
import Pagination from "@/app/components/ui-components/pagination/Pagination";


interface IMoviesListProps {
    getCustomMovies: (url:string, pageQuery: string, page: string) => Promise<IMovie[]>;
    url: string
    searchParams: {page: string},
    pageQuery: string,

}

const MoviesList = async ({getCustomMovies, searchParams, url, pageQuery }: IMoviesListProps) => {
    const page: string = searchParams?.page || '1';
    const movies: IMovie[] = (await getCustomMovies(url, pageQuery, page))

    return (
        <div className={styles.moviesContainer}>
            <div className={styles.movies}>
                {movies.map((movie: IMovie, index: number) => (
                <MoviesListCard key={index} movie={movie} />
                ))}
            </div>
            <Pagination/>
        </div>
    );
};

export default MoviesList;
