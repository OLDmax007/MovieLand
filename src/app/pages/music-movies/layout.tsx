import React from 'react';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Music Movies',
    description: 'Browse and explore a wide collection of movies.',
};

interface ILayoutProps  {
    children: React.ReactNode;
};


const MusicMoviesLayout = ({ children }: ILayoutProps) => {
return (
        <>
            {children}
        </>
    );
}

export default MusicMoviesLayout