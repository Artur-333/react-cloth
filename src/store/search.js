import { create } from "zustand";

export const useSearchStore = create((set) => ({
    searchValue: "",
    setSearchValue: (value) => { set({ searchValue: value }) }
}))