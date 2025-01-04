import React from 'react';
import MenuLink from "@/app/components/ui-components/menu-link/MenuLink";



const Menu = () => {
    return (
        <nav>
            <ul>
            <li><MenuLink path={'/'}>Home</MenuLink></li>
            <li><MenuLink path={'/pages/movies'}>Movies</MenuLink></li>
            <li><MenuLink path={'#about-info'}>About</MenuLink></li>
            <li><MenuLink path={'#about-info'}>Contact</MenuLink></li>
            </ul>
        </nav>
    );
};

export default Menu;