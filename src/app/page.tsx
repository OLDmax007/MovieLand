import React from 'react';
import SearchFilm from "@/app/components/movies-components/search-film/SearchFilm";
import GenresMenu from "@/app/components/genres-components/menu-genres/MenuGenres";


const HomePage = async () => {
    return (
        <main>
            <div>
            <SearchFilm/>
            <GenresMenu/>
            </div>
        </main>
    );
};

export default HomePage;