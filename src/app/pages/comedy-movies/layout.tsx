import React from 'react';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Comedy Movies',
    description: 'Browse and explore a wide collection of movies.',
};

interface ILayoutProps  {
    children: React.ReactNode;
};


const ComedyMoviesLayout = ({ children }: ILayoutProps) => {
return (
        <>
            {children}
        </>
    );
}

export default ComedyMoviesLayout