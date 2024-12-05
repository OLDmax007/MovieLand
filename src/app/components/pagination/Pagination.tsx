'use client';

import React, { FC, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const Pagination: FC = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const page:string = searchParams.get('page') || '1';
    const currentPage:number = +page

    useEffect(() => {
        if (!searchParams.has('page')) {
            router.push(`?page=${currentPage}`);
        }
    }, [searchParams, currentPage, router]);

    const navigatePage = (page: number) => {
        router.push(`?page=${page}`);
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
