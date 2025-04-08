import React from 'react'
import styles from "./style.module.css"
import { Link } from 'react-router'

export const Logo = () => {
  return (
    <Link className={styles.logo} to="/">
      <img className={styles.image} width={47} height={38} src="/image 1.png" alt="logo" />
      <b className={styles.boldText}>React Cloth</b>
      <span className={styles.spanText}>The </span>
    </Link>
  )
}


