const tmdbUrl: string = 'https://api.themoviedb.org/3/'

const queries = {
    pageQuery: 'page=',
    genreQuery: 'with_genres=',
};

const urls = {
    tmdbUrl: tmdbUrl,

    movies: {
        base: tmdbUrl + 'discover/movie',
    },

    genres: {
        genresUrl: tmdbUrl + 'genre/movie/list',
        byGenre: (genreId: string): string =>  urls.movies.base + '?' + queries.genreQuery + genreId
    },

    poster: {
        base: 'https://image.tmdb.org/t/p/original/'
    }
}

export {urls, queries};
