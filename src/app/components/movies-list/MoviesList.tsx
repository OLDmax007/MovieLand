import React from 'react';
import {IMovie} from "@/app/models/IMovie";
import MoviesListCard from "@/app/components/movies-list-card/MoviesListCard";
import styles from './movies-list.module.css';
import Pagination from "@/app/components/pagination/Pagination";
import moviesService from "@/app/services/tmdb.api.service";
import {getGenreNames} from "@/app/helpers/helpers";

interface IMoviesListProps {
    getCustomMovies: (url:string, pageQuery: string, page: string) => Promise<IMovie[]>;
    url: string
    searchParams: {page: string},
    pageQuery: string,

}

const MoviesList = async ({getCustomMovies, searchParams, url, pageQuery }: IMoviesListProps) => {
    const page: string = searchParams?.page || '1';
    const movies: IMovie[] = (await getCustomMovies(url, pageQuery, page)).slice(0,5)

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
