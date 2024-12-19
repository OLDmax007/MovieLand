import React, {FC} from 'react';
import {getStarRating} from "@/app/helpers/helpers";

interface IStarRatingProps {
    voteAverage: number
}

const StarRating:FC<IStarRatingProps> = ({voteAverage}) => {
    const starsRating = getStarRating(voteAverage);
    return (
        <div>
            {starsRating}
        </div>
    );
};

export default StarRating;