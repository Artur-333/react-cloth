import { SearchIcon } from 'lucide-react'
import React from 'react'
import { X } from 'lucide-react'
import styles from "./style.module.css"
import { useSearchStore } from '../../store/search'


export const Search = () => {
    const {searchValue, setSearchValue} = useSearchStore()
    return (
        <div className={styles.search}> 
            <label className={styles.box}>
                <SearchIcon className={styles.icon} size={16} />
                <input className={styles.input} onChange={(e) => setSearchValue(e.target.value)}  type="text" value={searchValue} />
            </label>
            <button className={styles.button} onClick={() => setSearchValue("")}> <X/></button>
        </div>
    )
}