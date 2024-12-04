import React, {FC} from 'react';
import {IMovie} from "@/app/models/IMovie";

interface IMoviesListCardProps {
    movie: IMovie
}


const MoviesListCard:FC<IMoviesListCardProps> = ({movie}) => {
    return (
        <div>
            {JSON.stringify(movie)}
        </div>
    );
};

export default MoviesListCard;