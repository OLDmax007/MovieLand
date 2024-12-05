import {IResponseMovies} from "@/app/models/IResponseMovies";
import {IMovie} from "@/app/models/IMovie";
import {accessToken} from "@/app/constans/authorization";
import {IGenre} from "@/app/models/IGenre";
import urls from "@/app/constans/urls";

const {movies: {moviesBaseUrl, paramPage}, genres: {genresBaseUrl} } = urls

const moviesService = {
    getAllMovies: async (page:string): Promise<IMovie[]> => {

        try {
            const response = await fetch(moviesBaseUrl + paramPage + page, {
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

    getAllGenres: async ():Promise<IGenre[]> => {
        try {
            const response = await fetch(genresBaseUrl, {
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
