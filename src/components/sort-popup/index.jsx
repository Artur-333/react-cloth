import React from "react";
import styles from "./style.module.css";
import { useFilterStore } from "../../store/filter.js";

const sortItems = ["alphabetical", "price"];

export const SortPopup = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const sort = useFilterStore ((state) => state.sort);
    const setSort = useFilterStore ((state) => state.setSort);
    

    
    return (
        <div className={styles.sortPopup} >
            <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
                <span>Sort by:</span>
                <span>{sort}</span>
            </button>
            {isOpen && (
                <ul className={styles.list}>
                    {sortItems.map((item, index) => (
                        <li key={index} className={styles.item}>
                        <button onClick={() => {setSort(item);  setIsOpen(false);}}
                         className={sort === item ? styles.itemButtonActive : styles.itemButton}>
                            {item}
                        </button>
                    </li>
                    ))}
                </ul>
            )}
        </div>
    );
};