import React from 'react'
import { Product } from '../components/product'
import { useParams } from 'react-router'
import { useProduct } from '../hooks/use-product'

export const ProductPage = () => {
    const { id } = useParams();
   const product = useProduct(id);
   
    return (
        <Product {...product} />
    )
}