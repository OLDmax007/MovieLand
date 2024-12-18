import React, {FC} from 'react';
import MoviesList from "@/app/components/movies-list/MoviesList";
import {queries, urls} from "@/app/constans/urls";
import moviesService from "@/app/services/tmdb.api.service";

const { genres: { byGenre} } = urls;
const { pageQuery } = queries;

interface IMoviesPageProps {
    searchParams: { page: string };
}

const MoviesPage: FC<IMoviesPageProps> = ({ searchParams }) => {
    return (
        <>
             <MoviesList getCustomMovies={moviesService.getMoviesByGenre}searchParams={searchParams} url={byGenre('10752')} pageQuery={pageQuery}/>
        </>
    );
};

export default MoviesPage;
