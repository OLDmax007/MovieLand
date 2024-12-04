import React, {FC} from 'react';
import {IMovie} from "@/app/models/IMovie";
import PosterPreview from "@/app/components/poster-preview/PosterPreview";
import styles from './movies-list-card.module.css'

interface IMoviesListCardProps {
    movie: IMovie
}


const MoviesListCard:FC<IMoviesListCardProps> = ({movie}) => {
    return (
        <div className={styles.movie}>
            <PosterPreview posterUrl={movie.poster_path}/>
        </div>
    );
};

export default MoviesListCard;