import React, { FC } from 'react';
import { getStarRating } from "@/app/helpers/helpers";

interface IStarRatingProps {
    voteAverage: number;
}

const StarRating: FC<IStarRatingProps> = ({ voteAverage }) => {
    const stars:string[] = getStarRating(voteAverage);

    return (
        <div className="star-rating">
            {stars.map((star, index) => (
                <span key={index} className={star === '★' ? 'star-fulled' : 'star-empty'}>
                    {star}
                </span>
            ))}
        </div>
    );
};

export default StarRating;
