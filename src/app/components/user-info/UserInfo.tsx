import React from 'react';
import styles from './user-info.module.css'

const UserInfo = () => {
    return (
        <div className={styles.userInfo}>
            <div className={styles.userDesc}>
                <span>Maxsim Dobrovolskyi</span>
                <p>Developer</p>
            </div>
            <img className={styles.userAvatar}
                 src={'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg'}
                 alt={'User avatar'}/>
        </div>
    );
};

export default UserInfo;