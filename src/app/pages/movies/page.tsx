import React, {FC} from 'react';
import MoviesList from "@/app/components/movies-list/MoviesList";

interface IMoviesPageProps {
    searchParams: {page: string}
}

const MoviesPage:FC<IMoviesPageProps> = ({searchParams}) => {

    return (
        <>
            <MoviesList searchParams={searchParams}/>
        </>
    );
};

export default MoviesPage;