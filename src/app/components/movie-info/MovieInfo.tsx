import React, {FC} from 'react';
import {IMovie} from "@/app/models/IMovie";

interface IMovieInfoProps {
    searchParams: Promise<{ movie: string }>
}

const MovieInfo: FC<IMovieInfoProps> = async ({searchParams}) => {
    const movie = JSON.parse((await searchParams).movie) as IMovie
    console.log(movie)
    return (
        <div>

        </div>
    );
};

export default MovieInfo;