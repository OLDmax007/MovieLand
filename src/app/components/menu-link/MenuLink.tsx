'use client';
import styles from './menu-link.module.css'
import React, {FC} from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

interface IMenuLinkProps{
    path: string,
    children: React.ReactNode
}

const MenuLink:FC<IMenuLinkProps> = ({path, children}) => {
    const pathName = usePathname()
    return (
        <Link href={path} className={pathName === path ? styles.activeLink : ''}>{children}</Link>
    );
};

export default MenuLink;