import React from 'react';
import SearchFilm from "@/app/components/movies-components/search-film/SearchFilm";
import GenresMenu from "@/app/components/genres-components/genres-menu/GenresMenu";


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