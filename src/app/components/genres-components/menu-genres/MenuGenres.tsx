import React from 'react';
import {IGenre} from "@/app/models/IGenre";
import moviesService from "@/app/services/tmdb.api.service";
import Genre from "@/app/components/genres-components/menu-genres/Genre";


const MenuGenres = async () => {
    const apiGenres:IGenre[] = await moviesService.getAllGenres();

    return (
        <aside>
            <h3>Or choose movie by category</h3>
            <nav>
                <ul>
                    {apiGenres.map((genre: IGenre, index) => (
                        <Genre key={index} genre={genre}/>
                    ))}
                </ul>
            </nav>

        </aside>
    );
};

export default MenuGenres;