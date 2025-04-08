import React from 'react'
import { Catalog } from '../components/catalog'
import { Title } from '../components/ui/title'


export const Home = () => {
    return (
        <>
            <Title size='l' text= "All Cloth"/>
            <Catalog/>
        </>
    )
}
