import React from 'react';
import moviesService from "@/app/services/tmdb.api.service";
import {IMovie} from "@/app/models/IMovie";
import MoviesListCard from "@/app/components/movies-list-card/MoviesListCard";

const MoviesList = async () => {
    const movies:IMovie[] = await moviesService.getAllMovies()

    return (
        <div>
            {movies.map((movie:IMovie, index:number) => (
                <MoviesListCard key={index} movie={movie}/>
            ))}
        </div>
    );
};

export default MoviesList;