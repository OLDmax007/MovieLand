import moviesService from "@/app/services/tmdb.api.service";
import {IGenre} from "@/app/models/IGenre";

const getGenreNames = async (genres: number[]) => {
    const apiGenres:IGenre[] = await moviesService.getAllGenres();

    const genreNames:string[] = genres.map((genreId: number) => {
        const genre = apiGenres.find((apiGenre:IGenre) => apiGenre.id === genreId);
        return genre ? genre.name : "No genre";
    });

    return genreNames

};

const getStarRating = (voteAverage: number) => {
    const starRating:number = Math.round(voteAverage / 2);
    const stars:string = '★'.repeat(starRating) + '☆'.repeat(5 - starRating);
    return stars;
}

export { getGenreNames, getStarRating };
