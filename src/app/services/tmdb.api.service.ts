import {IResponseMovies} from "@/app/models/IResponseMovies";
import {IMovie} from "@/app/models/IMovie";
import {accessToken} from "@/app/constans/authorization";
import {IGenre} from "@/app/models/IGenre";
import {IMoviesService} from "@/app/models/IMoviesService";
import {urls} from "@/app/constans/urls";

const moviesService: IMoviesService = {
    getAllMovies: async (url: string, pageQuery: string, page: string): Promise<IMovie[]> => {
        try {
            const response = await fetch(`${url}?${pageQuery}${page}`, {
                headers: {
                    Authorization: accessToken
                },
            });


            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const {results}: IResponseMovies = await response.json();
            return results;
        } catch (error) {
            console.error('Failed to fetch movies:', error);
            throw error;
        }
    },

    getMoviesByGenre: async (url: string, pageQuery: string, page: string): Promise<IMovie[]> => {
        console.log(`${url}?${pageQuery}${page}`)

        try {
            const response = await fetch(`${url}&${pageQuery}${page}`, {
                headers: {
                    Authorization: accessToken,
                },

            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }


            const {results}: IResponseMovies = await response.json();
            return results;
        } catch (error) {
            console.error('Failed to fetch movies by genre:', error);
            throw error;
        }
    },

    getAllGenres: async (): Promise<IGenre[]> => {
        try {
            const response = await fetch(urls.genres.base
                , {
                headers: {
                    Authorization: accessToken
                }
            })

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const {genres} = await response.json()
            return genres

        } catch (error) {
            console.error('Failed to fetch genres:', error);
            throw error
        }
    },

    searchFilmByName: async (name: string): Promise<IMovie> => {
        console.log(urls.movies.searchMovie + name)
        try {
            const response = await fetch(urls.movies.searchMovie + name, {
                headers: {
                    Authorization: accessToken
                }
            })

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const {results}: IResponseMovies = await response.json();
            return results[0]

        } catch (error) {
            console.error('Failed to fetch search film:', error);
            throw error
        }
    },

}

export default moviesService;
