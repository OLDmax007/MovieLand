import React from 'react';
import moviesService from "@/app/services/tmdb.api.service";
import {IMovie} from "@/app/models/IMovie";

const MoviesList = async () => {
    const movies:IMovie[] = await moviesService.getAllMovies()

    return (
        <div>

        </div>
    );
};

export default MoviesList;