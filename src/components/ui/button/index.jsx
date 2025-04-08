import React from 'react'
import styles from "./style.module.css"

export const Button = ({ variant = "default", children, className, onClick, disabled }) => {

  const variants = {
    default: styles.default,
    secondary: styles.secondary
  }

  return (
    <button onClick={onClick} disabled={disabled} className={variants[variant] + " " + className}>{children}</button>
  )
}
