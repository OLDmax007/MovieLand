import React, { FC } from 'react';
import { getGenreNames } from "@/app/helpers/helpers";

interface IGenreBadge {
    genres: number[];
}

const GenreBadge: FC<IGenreBadge> = async ({ genres }) => {
    const genresList = await getGenreNames(genres);

    return (
        <ul>
            {genresList.map((genre, index) => {
                    return <li key={index}>{genre}</li>;
                })}
        </ul>
    );
};

export default GenreBadge;
