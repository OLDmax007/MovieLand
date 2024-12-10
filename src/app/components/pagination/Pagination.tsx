'use client';

import React, { FC, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
interface IPaginationProps {
    uniquePage: string
}


const Pagination: FC<IPaginationProps> = ({uniquePage}) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const page:string = searchParams.get(uniquePage) || '1';
    const currentPage:number = +page

    useEffect(() => {
        if (!searchParams.has(uniquePage)) {
            router.push(`?${uniquePage}=${currentPage}`);
        }
    }, [searchParams, currentPage, router]);

    const navigatePage = (page: number) => {
        router.push(`?${uniquePage}=${page}`);
    };

    return (
        <div>
            <button disabled={currentPage === 1} onClick={() => navigatePage(currentPage - 1)}>
                Prev
            </button>
            <button onClick={() => navigatePage(currentPage + 1)}>Next</button>
        </div>
    );
};

export default Pagination;
