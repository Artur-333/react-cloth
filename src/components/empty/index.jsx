import React from "react";
import styles from "./style.module.css";


export const Empty = ({text, title, umgUrl}) => {

    return (
        <div className={styles.empty}>
            
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
            <img className= {styles.img} src= {umgUrl} alt="" />
        </div>
    );
};