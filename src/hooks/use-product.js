import React from "react";
import { useProducts } from "./use-products";

export const useProduct = (id) => {
    const [productObj, setProductObj] = React.useState({});
    const { isFindProduct } = useProducts();
    React.useEffect(() => {
        isFindProduct(id).then((obj) => {
            setProductObj(obj)
        })
    }, [])
    return productObj
}