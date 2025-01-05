import React from 'react';
import SearchMovie from "@/app/components/movies-components/search-film/SearchMovie";
import GenresMenu from "@/app/components/genres-components/menu-genres/MenuGenres";


const HomePage = async () => {
    return (
        <main>
            <div>
            <SearchMovie/>
            <GenresMenu/>
            </div>
        </main>
    );
};

export default HomePage;