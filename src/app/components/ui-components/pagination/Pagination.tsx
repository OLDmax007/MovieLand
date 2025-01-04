'use client';

import React, {useEffect} from 'react';
import {useRouter, useSearchParams} from 'next/navigation';
import styles from './pagination.module.css'

const Pagination = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const page: string = searchParams.get('page') || '1';
    const currentPage: number = isNaN(+page) ? 1 : +page;

    useEffect(() => {
        if (!searchParams.has('page')) {
            router.push(`?page=1`);
        }
    }, [searchParams, router]);

    const navigatePage = (page: number) => {
        if (page < 1) return;
        router.push(`?page=${page}`);
    };

    return (
        <div className={styles.buttons}>
            <button disabled={currentPage === 1} onClick={() => navigatePage(currentPage - 1)}>
                Prev
            </button>
            <button onClick={() => navigatePage(currentPage + 1)}>Next</button>
        </div>
    );
};

export default Pagination;
