import React from "react";
import styles from "./style.module.css";
import  {Logo, Container}  from "../index.js";

import { Button } from "../index.js";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";
import { useBasket } from "../../hooks/use-basket.js";
import { Search } from "../search";


export const Header = () => {
    const {totalPrice, totalCount} = useBasket();
    return(
       <header className={styles.header}>
        <Container className={styles.container}>
            <Logo />
              
            <Search/>
            <Link to ="/cart" className={styles.button}> {totalPrice} ₽ <span className={styles.spanLine}></span>
            <ShoppingCart size={12} /> {totalCount}         
             </Link>
        </Container>
        
       </header>
    )
}