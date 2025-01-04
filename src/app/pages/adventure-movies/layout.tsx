import React from 'react';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Adventure Movies',
    description: 'Browse and explore a wide collection of movies.',
};

interface ILayoutProps  {
    children: React.ReactNode;
};


const AdventureMoviesLayout = ({ children }: ILayoutProps) => {
return (
        <>
            {children}
        </>
    );
}

export default AdventureMoviesLayout