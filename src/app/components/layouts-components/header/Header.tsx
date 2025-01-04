import React from 'react';
import Menu from "@/app/components/layouts-components/header/menu/Menu";
import UserInfo from "@/app/components/layouts-components/header/user-info/UserInfo";


const Header = () => {
    return (
        <header>
            <span>MovieLand</span>
            <Menu/>
            <UserInfo/>
        </header>
    );
};

export default Header;