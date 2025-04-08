import React from 'react'
import styles from "./style.module.css"
export const Title = ({ size = "m", text, className }) => {

    const setTag = {
        s: "h3",
        m: "h2",
        l: "h1" 
    }

    const setTaqSize = {
        s: "small",
        m: "medium",
        l: "large"
    }

    return React.createElement(
        setTag[size], 
        { className: styles[setTaqSize[size]] + " " + className},    
        text
    )
}
