import {IResponseMovies} from "@/app/models/IResponseMovies";
import {IMovie} from "@/app/models/IMovie";
import {accessToken} from "@/app/constans/authorization";
import {IGenre} from "@/app/models/IGenre";

const moviesService = {
    getAllMovies: async (): Promise<IMovie[]> => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/discover/movie', {
                headers: {
                    Authorization: accessToken
                }
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

    getAllGenres: async ():Promise<IGenre[]> => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/genre/movie/list', {
                headers: {
                    Authorization: accessToken
                }
            })

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const {genres} : {genres: IGenre[]}  = await response.json()
            return genres

        } catch (error) {
            console.error('Failed to fetch genres:', error);
            throw error
        }
    }

}

export default moviesService;
