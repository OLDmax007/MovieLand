import React from 'react';
import styles from './user-info.module.css'

const UserInfo = () => {
    return (
        <div className={styles.userInfo}>
            <div className={styles.userDesc}>
            <span>Maxsim Dobrovolskyi</span>
            <p>Developer</p>
            </div>
            <div className={styles.userAvatar}><img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYDoS6cUbWHJILYpRGvE9o3JxLUtHmk2Euqw&s'} alt={'User avatar'}/></div>
        </div>
    );
};

export default UserInfo;