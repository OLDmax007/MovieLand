const tmdbUrl: string = 'https://api.themoviedb.org/3/'

const params = {
    pmPage: '?page=',
    pmWithGenres: '?with_genres=',
}

const urls = {
    tmdbUrl: tmdbUrl,

    movies: {
        moviesUrl: tmdbUrl + 'discover/movie',
    },

    genres: {
        genresUrl: tmdbUrl + 'genre/movie/list',
        byGenre: (genreId: number): string => tmdbUrl + urls.movies.moviesUrl + params.pmWithGenres + genreId,
    },

    poster: {
        posterUrl: 'https://image.tmdb.org/t/p/original/'
    }
}

export default urls;
