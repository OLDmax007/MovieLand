import React, {FC} from 'react';
import {IMovie} from "@/app/models/IMovie";
import PosterPreview from "@/app/components/poster-preview/PosterPreview";
import styles from './movies-list-card.module.css'
import Link from "next/link";
import StarRating from "@/app/components/star-rating/StarRating";

interface IMoviesListCardProps {
    movie: IMovie
}


const MoviesListCard:FC<IMoviesListCardProps> = ({movie}) => {
    return (
        <Link href={{
            pathname: 'movies/' + movie.id,
            query: {movieTitle: movie.title}
        }}>
        <div className={styles.movie}>
            <PosterPreview posterUrl={movie.poster_path}/>
            <div className={styles.movieDesc}>
                <h2>{movie.title}</h2>
                <StarRating voteAverage={movie.vote_average}/>
            </div>
        </div>
        </Link>
    );
};

export default MoviesListCard;