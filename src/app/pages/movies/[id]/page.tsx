import React, {FC} from 'react';
import MovieInfo from "@/app/components/movie-info/MovieInfo";

interface IMovieInfoPageProps {
    params: {id: number}
    searchParams: Promise<{movie: string}>;
}

const MovieInfoPage: FC<IMovieInfoPageProps> = ({ searchParams, params }) => {

    return (
        <div>
            <MovieInfo searchParams={searchParams}/>
        </div>
    );
};

export default MovieInfoPage;
