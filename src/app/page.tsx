import React from 'react';
import moviesService from "@/app/services/tmdb.api.service";

const HomePage = async () => {
    const movies = await moviesService.getAllMovies()
    const genres = await moviesService.getAllGenres()

console.log(movies)
    console.log(genres)
    return (
        <div>

        </div>
    );
};

export default HomePage;