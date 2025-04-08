import { create } from "zustand";
import { persist } from "zustand/middleware";
import qs from "qs";

export const useFilterStore = create(
    persist(
        (set) => ({

            sort: qs.parse(window.location.search.substring(1)).sort ||
                JSON.parse(localStorage.getItem("filter"))?.state.sort || "alphabetical",
            setSort: (value) => { set({ sort: value }) },
            category: qs.parse(window.location.search.substring(1)).category ||
                JSON.parse(localStorage.getItem("filter"))?.state.category || "all",
            setCategory: (value) => { set({ category: value }) },
        }),
        {
            name: "filter",
            partialize: (state) => ({ sort: state.sort, category: state.category })
        }
    ));