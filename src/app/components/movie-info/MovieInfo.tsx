import React, {FC} from 'react';
import StarRating from "@/app/components/star-rating/StarRating";
import styles from './movie-info.module.css'
import {urls} from "@/app/constans/urls";
import moviesService from "@/app/services/tmdb.api.service";

const {poster: {base}} = urls

interface IMovieInfoProps {
    searchParams: Promise<{movieTitle: string}>
}


const MovieInfo: FC<IMovieInfoProps> = async ({searchParams}) => {
    const movie = await moviesService.searchFilmByName((await searchParams).movieTitle)
    return (
        <section>
            <div className={styles.wrapperContainer}
                 style={{backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), transparent), url(${base + movie.backdrop_path})`}}>
                <div className={styles.content}>
                    <h3>
                        {movie.title}
                    </h3>
                    <ul>
                        <li>{movie.video ? 'There is' : 'There is not'}</li>
                        <li>{movie.adult ? '18+' : '0+'}</li>
                        <li>{movie.release_date.slice(0, 4)}</li>
                        <li>{Math.round(movie.popularity)}</li>
                        <li>{movie.vote_average}</li>
                    </ul>
                    <p>{movie.overview}</p>
                    <div className={styles.trailerActions}>
                        <button className={styles.btnTrailer}>Trailer</button>
                        <div>
                            <svg className={styles.heart} xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24">
                                <path
                                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>

                            <svg className={styles.bookmark} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                 viewBox="0 0 50 50">
                                <path
                                    d="M 37 48 C 36.824219 48 36.652344 47.953125 36.496094 47.863281 L 25 41.15625 L 13.503906 47.863281 C 13.195313 48.042969 12.8125 48.046875 12.503906 47.867188 C 12.191406 47.6875 12 47.359375 12 47 L 12 3 C 12 2.449219 12.449219 2 13 2 L 37 2 C 37.554688 2 38 2.449219 38 3 L 38 47 C 38 47.359375 37.808594 47.6875 37.496094 47.867188 C 37.34375 47.957031 37.171875 48 37 48 Z"></path>
                            </svg>

                        </div>
                    </div>
                    <p>Rated movie</p>
                    <StarRating voteAverage={movie.vote_average}/>
                </div>
                <div className={styles.playAction}>
                    <button className={styles.btnPlay}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                            <path
                                d="M41.1589 25.0565C41.4112 24.8827 41.6175 24.6503 41.76 24.3791C41.9025 24.108 41.977 23.8062 41.977 23.4999C41.977 23.1935 41.9025 22.8918 41.76 22.6206C41.6175 22.3495 41.4112 22.117 41.1589 21.9433L16.5414 4.90046C16.2575 4.70319 15.9249 4.58751 15.5799 4.56598C15.2348 4.54445 14.8904 4.6179 14.5842 4.77835C14.2779 4.9388 14.0215 5.18011 13.8427 5.47606C13.664 5.77202 13.5698 6.1113 13.5703 6.45704L13.5703 40.5427C13.5717 40.8877 13.6672 41.2257 13.8463 41.5204C14.0255 41.8152 14.2816 42.0555 14.5872 42.2156C14.8927 42.3757 15.2361 42.4495 15.5805 42.429C15.9248 42.4085 16.257 42.2945 16.5414 42.0993L41.1589 25.0565Z"
                                fill="white"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MovieInfo;