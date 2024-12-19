import React from 'react';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Movie Details',
    description: 'Details about a specific movie.',
};

interface ILayoutProps  {
    children: React.ReactNode;
};


const MovieLayout = ({ children }: ILayoutProps) => {
return (
        <>
            {children}
        </>
    );
}

export default MovieLayout