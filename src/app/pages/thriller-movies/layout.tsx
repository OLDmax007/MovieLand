import React from 'react';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Thriller Movies',
    description: 'Browse and explore a wide collection of movies.',
};

interface ILayoutProps  {
    children: React.ReactNode;
};


const ThrillerMoviesLayout = ({ children }: ILayoutProps) => {
return (
        <>
            {children}
        </>
    );
}

export default ThrillerMoviesLayout