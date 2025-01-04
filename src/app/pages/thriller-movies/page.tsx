import React, {FC} from 'react';

import {queries, urls} from "@/app/constans/urls";
import moviesService from "@/app/services/tmdb.api.service";
import styles from "../../components/movies-components/movies-list/movies-list.module.css"
import MoviesList from "@/app/components/movies-components/movies-list/MoviesList";


const { genres: { byGenre } } = urls;
const { pageQuery } = queries;

interface IMoviesPageProps {
    searchParams: { page: string };
}

const ThrillerMoviesPage: FC<IMoviesPageProps> = ({ searchParams }) => {
    return (
        <section className={styles.moviesContainer}>
            <MoviesList getCustomMovies={moviesService.getMoviesByGenre} searchParams={searchParams} url={byGenre('53')} pageQuery={pageQuery}/>
        </section>
    );
};

export default ThrillerMoviesPage;
