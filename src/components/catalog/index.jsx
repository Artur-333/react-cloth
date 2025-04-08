import React from 'react'
import { Product, Container } from '../index.js'
import styles from "./style.module.css"
import { useProducts } from '../../hooks/use-products.js'
import { Skeleton } from '../product/skeleton.jsx'
import { useSearchStore } from '../../store/search.js'

export const Catalog = () => {
    const { data, error, isLoading } = useProducts();
    const searchValue = useSearchStore((state) => state.searchValue).toLowerCase().trim();

    if (error) {
        return <h1>Error</h1>
    }

    const skeletons = Array.from({ length: 8 }).map((_, index) => <Skeleton key={index} />)
    console.log(skeletons);


    const products = data
    .filter(item => item.title.toLowerCase().includes(searchValue))
        .map((item) => (
            <li key={item.id} className={styles.item}>
                <Product {...item} />
            </li>
        ))

    return (
        <Container>
            <ul className={styles.catalog}>
                {
                    isLoading ? skeletons : products
                }

            </ul>
        </Container>
    )
}
