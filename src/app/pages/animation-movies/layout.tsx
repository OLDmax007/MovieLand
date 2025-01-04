import React from 'react';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Animation Movies',
    description: 'Browse and explore a wide collection of movies.',
};

interface ILayoutProps  {
    children: React.ReactNode;
};


const AnimationMoviesLayout = ({ children }: ILayoutProps) => {
return (
        <>
            {children}
        </>
    );
}

export default AnimationMoviesLayout