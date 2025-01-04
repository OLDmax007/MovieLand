import React from 'react';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Crime Movies',
    description: 'Browse and explore a wide collection of movies.',
};

interface ILayoutProps  {
    children: React.ReactNode;
};


const CrimeMoviesLayout = ({ children }: ILayoutProps) => {
return (
        <>
            {children}
        </>
    );
}

export default CrimeMoviesLayout