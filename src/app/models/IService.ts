import {IGenre} from "@/app/models/IGenre";
import {IMovie} from "@/app/models/IMovie";

export interface IMoviesService {
    getAllMovies: (url: string, pageQuery: string, page: string) => Promise<IMovie[]>;
    getMoviesByGenre: (url: string, pageQuery: string, page: string) => Promise<IMovie[]>;
    getAllGenres: () => Promise<IGenre[]>;
}