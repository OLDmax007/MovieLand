import React from 'react';
import MenuLink from "@/app/components/menu-link/MenuLink";

const Menu = () => {
    return (
        <nav>
            <ul>
            <li><MenuLink path={'/'}>Home</MenuLink></li>
            <li><MenuLink path={'/movies'}>Movies</MenuLink></li>
            <li><MenuLink path={'/#about'}>About</MenuLink></li>
            <li><MenuLink path={'/#contact'}>Contact</MenuLink></li>
            </ul>
        </nav>
    );
};

export default Menu;