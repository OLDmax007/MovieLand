import React from 'react';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Metadata',
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