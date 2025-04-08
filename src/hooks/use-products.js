import useSwr from "swr";
import { fetcher } from "../helpers/fetcher";
import { useFilters } from "./use-filters";
import { ApiRoutes } from "../services/constans";
import {exiosInstance} from "../services/instance";

export const useProducts = () => {

    const { sort, category } = useFilters();
    const sortQuery = sort === "alphabetical" ? "&_sort=title" : "&_sort=price";
    const categoryQuery = category === "all" ? "" : `&type=${category}`;
    const query = `?${categoryQuery}${sortQuery}`
    const { data: products, error, isLoading } = useSwr(`${ApiRoutes.PRODUCTS}${query}`, fetcher);

    const data = products?.length > 0 ? products : [];

    if (error || !data) {
        return {
            data: [],
            isFindProduct: () => { },
            error,
            isLoading
        }
    }

    const isFindProduct = async (id) => {
        try {
            const product = await exiosInstance.get(`${ApiRoutes.PRODUCTS}/${id}`);
            return  product.data
        } catch (error) {
            console.log(error);
        }
    }

    return {
        data,
        isFindProduct,
        error,
        isLoading
    }

}