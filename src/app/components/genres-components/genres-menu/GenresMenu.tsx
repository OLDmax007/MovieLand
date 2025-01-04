import React from 'react';
import {IGenre} from "@/app/models/IGenre";
import moviesService from "@/app/services/tmdb.api.service";
import Genre from "@/app/components/genres-components/genres-menu/Genre";


const GenresMenu = async () => {
    const apiGenres:IGenre[] = await moviesService.getAllGenres();

    return (
        <aside>
            <nav>
                <ul>
                    {apiGenres.map((genre:IGenre, index) => (
                       <Genre key={index} genre={genre}/>
                     ))}
                </ul>
            </nav>

        </aside>
    );
};

export default GenresMenu;