import React, { FC } from 'react';
import { IGenre } from "@/app/models/IGenre";
import MenuLink from "@/app/components/ui-components/menu-link/MenuLink";

interface IGenreProps {
    genre: IGenre
}

const Genre: FC<IGenreProps> = ({ genre }) => {
    const clearedGenre = genre.name.toLowerCase().replace(/\s+/g, '-');

    return (
        <li>
            <MenuLink path={`pages/${clearedGenre}-movies`}>{genre.name}</MenuLink>
        </li>
    );
};

export default Genre;
