import React from 'react';
import moviesService from "@/app/services/tmdb.api.service";
import MoviesList from "@/app/components/movies-list/MoviesList";

const HomePage = async () => {
    const movies = await moviesService.getAllMovies()
    const genres = await moviesService.getAllGenres()

console.log(movies)
    console.log(genres)
    return (
        <div>
            <MoviesList/>
        </div>
    );
};

export default HomePage;