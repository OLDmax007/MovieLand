import React from 'react';
import Menu from "@/app/components/menu/Menu";
import UserInfo from "@/app/components/user-info/UserInfo";

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