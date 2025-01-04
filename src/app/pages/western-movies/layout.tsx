import React from 'react';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Western Movies',
    description: 'Browse and explore a wide collection of movies.',
};

interface ILayoutProps  {
    children: React.ReactNode;
};


const WesternMoviesLayout = ({ children }: ILayoutProps) => {
return (
        <>
            {children}
        </>
    );
}

export default WesternMoviesLayout