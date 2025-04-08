
import React from "react";
import { Outlet } from "react-router";
import { Header, Container } from "../components";

export const CartLeyout = () => {

    return (
        <>
            <Header />
            <Container>
            <Outlet />
            </Container>
        </>
    )
};