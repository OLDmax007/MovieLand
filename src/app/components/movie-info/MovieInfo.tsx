import React, {FC} from 'react';
import {IMovie} from "@/app/models/IMovie";

interface IMovieInfoProps {
    searchParams: Promise<{ movie: string }>
}

const MovieInfo: FC<IMovieInfoProps> = async ({searchParams}) => {
    const movie: IMovie = JSON.parse((await searchParams).movie) as IMovie
    return (
        <section>
            <div className={'wrapper-container'}>
                <div className={'left-container'}>
                    <h3>
                        {movie.title}
                    </h3>
                    <p>{movie.overview}</p>
                    <ul>
                        <li>{movie.video ? 'There is film' : 'No film'}</li>
                        <li>{movie.adult ? '18+' : '0+'}</li>
                        <li>{movie.release_date}</li>
                        <li>{movie.popularity}</li>
                    </ul>
                </div>
                <div className={'right-container'}>

                </div>
            </div>
        </section>
    );
};

export default MovieInfo;