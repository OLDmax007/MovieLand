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

const ActionMoviesPage: FC<IMoviesPageProps> = ({ searchParams }) => {
    return (
        <section className={styles.moviesContainer}>
            <MoviesList getCustomMovies={moviesService.getMoviesByGenre} searchParams={searchParams} url={byGenre('28')} pageQuery={pageQuery}/>
        </section>
    );
};

export default ActionMoviesPage;
