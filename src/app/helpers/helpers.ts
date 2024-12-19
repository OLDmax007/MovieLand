import moviesService from "@/app/services/tmdb.api.service";
import {IGenre} from "@/app/models/IGenre";

const getGenreNames = async (genres: number[]) :Promise<string[]> => {
    const apiGenres:IGenre[] = await moviesService.getAllGenres();

    const genreNames:string[] = genres.map((genreId: number):string => {
        const genre:IGenre | undefined = apiGenres.find((apiGenre:IGenre):boolean => apiGenre.id === genreId);
        return genre ? genre.name : "No genre";
    });

    return genreNames

};

const getStarRating = (voteAverage: number): string[] => {
    const starRating: number = Math.round(voteAverage / 2);
    const stars: string[] = [];

    for (let i:number = 0; i < 5; i++) {
        stars.push(i < starRating ? '★' : '☆');
    }

    return stars;
};
export { getGenreNames, getStarRating};
