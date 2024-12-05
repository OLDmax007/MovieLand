import React from 'react';
import moviesService from "@/app/services/tmdb.api.service";
import {IMovie} from "@/app/models/IMovie";
import MoviesListCard from "@/app/components/movies-list-card/MoviesListCard";
import styles from './movies-list.module.css'

const MoviesList = async () => {
    const movies:IMovie[] = await moviesService.getAllMovies('5')
    console.log(movies)
    const limitedMovies = movies.slice(0,5)

    return (
        <section className={styles.movies}>
            {limitedMovies.map((movie:IMovie, index:number) => (
                <MoviesListCard key={index} movie={movie}/>
            ))}
        </section>
    );
};

export default MoviesList;