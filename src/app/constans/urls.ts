const tmdbUrl: string = 'https://api.themoviedb.org/3/'

const queries = {
    query: 'query=',
    pageQuery: 'page=',
    genreQuery: 'with_genres=',
};

const urls = {
    tmdbUrl: tmdbUrl,

    movies: {
        base: tmdbUrl + 'discover/movie',
        searchMovie: tmdbUrl + 'search/movie?' + queries.query
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
