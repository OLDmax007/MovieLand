import moviesService from "@/app/services/tmdb.api.service";
import {IGenre} from "@/app/models/IGenre";

const getGenreNames = async (genres: number[]) :Promise<string[]> => {
    const apiGenres:IGenre[] = await moviesService.getAllGenres();
    return genres.map((genreId: number):string => {
        const genre = apiGenres.find((apiGenre:IGenre) => apiGenre.id === genreId);
        return genre ? genre.name : "No genre";
    });

};

const getStarRating = (voteAverage: number): string[] => {
    const starRating = Math.round(voteAverage / 2);
    const stars = [];

    for (let i:number = 0; i < 5; i++) {
        stars.push(i < starRating ? '★' : '☆');
    }

    return stars;
};
export { getGenreNames, getStarRating};
