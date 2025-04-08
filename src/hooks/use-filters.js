import qs from "qs";
import React from "react";
import { useNavigate } from "react-router";
import { useFilterStore } from "../store/filter";


export const useFilters = () => {
    const navigate = useNavigate();
    const sort = useFilterStore((state) => state.sort).toLowerCase();
    const category = useFilterStore((state) => state.category).toLowerCase();


    React.useEffect(() => {
        const query = qs.stringify({ sort, category })
        navigate(`?${query}`);
    }, [sort, category])

    return {
        sort,
        category
    }
};