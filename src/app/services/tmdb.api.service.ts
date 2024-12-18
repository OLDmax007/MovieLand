import {IResponseMovies} from "@/app/models/IResponseMovies";
import {IMovie} from "@/app/models/IMovie";
import {accessToken} from "@/app/constans/authorization";
import {IGenre} from "@/app/models/IGenre";
import {IMoviesService} from "@/app/models/IService";

const moviesService:IMoviesService = {
    getAllMovies: async (url: string, pageQuery: string, page: string): Promise<IMovie[]> => {
        console.log(`${url}?${pageQuery}${page}`)
        try {
            const response = await fetch(   `${url}?${pageQuery}${page}`, {
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

    getMoviesByGenre: async (url: string, pageQuery: string,  page: string): Promise<IMovie[]> => {
        console.log("URL api:", `${url}?${pageQuery}${page}`);
        try {
            const response = await fetch(`${url}?${pageQuery}${page}`  ,  {
                headers: {
                    Authorization: accessToken,
                },
                // cache: "no-cache"

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
            const response = await fetch('', {
                headers: {
                    Authorization: accessToken
                }
            })

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const {genres}: { genres: IGenre[] } = await response.json()
            return genres

        } catch (error) {
            console.error('Failed to fetch genres:', error);
            throw error
        }
    }

}

export default moviesService;
