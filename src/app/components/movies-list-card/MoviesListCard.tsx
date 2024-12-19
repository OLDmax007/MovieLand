import React, {FC} from 'react';
import {IMovie} from "@/app/models/IMovie";
import PosterPreview from "@/app/components/poster-preview/PosterPreview";
import styles from './movies-list-card.module.css'
import Link from "next/link";

interface IMoviesListCardProps {
    movie: IMovie
}


const MoviesListCard:FC<IMoviesListCardProps> = ({movie}) => {
    return (
        <Link href={{
            pathname: 'movies/' + movie.id,
            query: {movie: JSON.stringify(movie)}
        }}>
        <div className={styles.movie}>
            <PosterPreview posterUrl={movie.poster_path}/>
            <h2>{movie.title}</h2>
        </div>
        </Link>
    );
};

export default MoviesListCard;