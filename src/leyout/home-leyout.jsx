import React from "react";
import { Header, TopBar, Container } from "../components";
import { Outlet } from "react-router";


export const HomeLeyout = () => {
    return (
        <>
        <Header/>
        <TopBar/>
        <Container>
        <Outlet/>
        </Container>
        </>
    )
}