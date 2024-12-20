import React, {FC} from 'react';
import MovieInfo from "@/app/components/movie-info/MovieInfo";

interface IMovieInfoPageProps {
    searchParams: Promise<{movie: string}>;
}

const MovieInfoPage: FC<IMovieInfoPageProps> = ({ searchParams }) => {

    return (
        <>
            <MovieInfo searchParams={searchParams}/>
        </>
    );
};

export default MovieInfoPage;
