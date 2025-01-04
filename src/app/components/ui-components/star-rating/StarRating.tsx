import React, { FC } from 'react';
import { getStarRating } from "@/app/helpers/helpers";
import styles from './star-rating.module.css';

interface IStarRatingProps {
    voteAverage: number;
}

const StarRating: FC<IStarRatingProps> = ({ voteAverage }) => {
    const stars:string[] = getStarRating(voteAverage);

    return (
        <div className={styles.ratingContainer}>
            {stars.map((star, index) => (
                <span key={index} className={star === '★' ? styles.starFulled : styles.starFulled}>
                    {star}
                </span>
            ))}
        </div>
    );
};

export default StarRating;
