import React from 'react';
import MenuLink from "@/app/components/menu-link/MenuLink";
import styles from  './menu.module.css'

const Menu = () => {
    return (
        <nav>
            <ul className={styles.menu}>
            <li><MenuLink path={'/'}>Home</MenuLink></li>
            <li><MenuLink path={'/pages/movies'}>Movies</MenuLink></li>
            <li><MenuLink path={'/#about'}>About</MenuLink></li>
            <li><MenuLink path={'/#contact'}>Contact</MenuLink></li>
            </ul>
        </nav>
    );
};

export default Menu;