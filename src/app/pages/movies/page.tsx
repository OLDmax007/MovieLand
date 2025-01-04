import React, {FC} from 'react';

import {queries, urls} from "@/app/constans/urls";
import moviesService from "@/app/services/tmdb.api.service";
import styles from "../../components/movies-components/movies-list/movies-list.module.css"
import MoviesList from "@/app/components/movies-components/movies-list/MoviesList";


const { movies: { base } } = urls;
const { pageQuery } = queries;

interface IMoviesPageProps {
    searchParams: { page: string };
}

const MoviesPage: FC<IMoviesPageProps> = ({ searchParams }) => {
    return (
        <section className={styles.sectionMovies}>
            <MoviesList getCustomMovies={moviesService.getAllMovies} searchParams={searchParams} url={base} pageQuery={pageQuery}/>
        </section>
    );
};

export default MoviesPage;
