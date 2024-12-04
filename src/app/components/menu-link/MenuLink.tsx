'use client';
import React, {FC} from 'react';
import Link from "next/link";

interface IMenuLinkProps{
    path: string,
    children: React.ReactNode
}

const MenuLink:FC<IMenuLinkProps> = ({path, children}) => {
    return (
        <Link href={path}>{children}</Link>
    );
};

export default MenuLink;