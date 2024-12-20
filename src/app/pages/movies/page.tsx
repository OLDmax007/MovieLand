import React, { FC } from 'react';
import MoviesList from "@/app/components/movies-list/MoviesList";
import { queries, urls } from "@/app/constans/urls";
import moviesService from "@/app/services/tmdb.api.service";

const { movies: { base } } = urls;
const { pageQuery } = queries;

interface IMoviesPageProps {
    searchParams: { page: string };
}

const MoviesPage: FC<IMoviesPageProps> = ({ searchParams }) => {
    return (
        <>
             <MoviesList getCustomMovies={moviesService.getAllMovies} searchParams={searchParams} url={base} pageQuery={pageQuery}/>
        </>
    );
};

export default MoviesPage;
