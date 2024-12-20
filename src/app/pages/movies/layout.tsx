import React from 'react';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Movies Collection',
    description: 'Browse and explore a wide collection of movies.',
};

interface ILayoutProps  {
    children: React.ReactNode;
};


const MoviesLayout = ({ children }: ILayoutProps) => {
return (
        <>
            {children}
        </>
    );
}

export default MoviesLayout