import React, {FC} from 'react';
import MovieInfo from "@/app/components/movies-components/movie-info/MovieInfo";


interface IMovieInfoPageProps {
    searchParams: Promise<{movieTitle: string}>;
}

const MovieInfoPage: FC<IMovieInfoPageProps> = ({ searchParams }) => {

    return (
        <section>
            <MovieInfo searchParams={searchParams}/>
        </section>
    );
};

export default MovieInfoPage;
