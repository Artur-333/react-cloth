import React from "react";
import { Button } from "../index.js";
import style from "./style.module.css"
import { useFilterStore } from "../../store/filter.js";


const categories = ["All", "Men", "Women", "Kids"]

export const Categories = () => {

   const category = useFilterStore((state) => state.category);
   const setCategory = useFilterStore((state)=> state.setCategory);

    return (
        <ul className={style.list}>
            {categories.map((item, index) => (
                <li className={style.item} key={index}>
                    <Button onClick={() => setCategory(item.toLowerCase())} variant={category === item.toLowerCase() ? "default" : "secondary"}>{item}</Button>
                </li>
            ))}
        </ul>
    )



    return (<ul className={style.list}>
        {
            <li className={style.item}>
                <Button onClick={() => onClickCategory(0)} variant={activeindex === 0 ? "default" : "secondary"}>
                    
                </Button>
            </li>
        }
    </ul>
    );
};