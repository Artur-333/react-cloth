import React from "react";
import { Categories, SortPopup, Container } from "../index.js";

import styles from "./style.module.css";
export const TopBar = () => {
    return (
        <Container className={styles.container}>
            <Categories />
            <SortPopup />
        </Container>
    );
};