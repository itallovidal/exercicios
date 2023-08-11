import React from 'react';
import styles from "./profilePicture.module.css";

function ProfilePicture({styleChosen, picturePath}) {
    return (


        <picture className={`${styles.profilePicture} ${styles[styleChosen]}`}>
            <img className={styles.img} src={picturePath} alt=""/>
        </picture>
    );
}

export default ProfilePicture;