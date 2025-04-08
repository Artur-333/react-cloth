import React from 'react'

export const Container = ({children, className}) => {
    return (
        <div className={className} style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            {children}
        </div>
    )
}
