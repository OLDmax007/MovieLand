import React, {FC} from 'react';

interface IMovieInfoPageProps {
    searchParams: Promise<{movie: string}>;
}

const MovieInfoPage: FC<IMovieInfoPageProps> = ({ searchParams }) => {
    return (
        <>

        </>
    );
};

export default MovieInfoPage;
