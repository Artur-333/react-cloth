import { lazy } from "react";
export const Home = lazy(() => import("./home.jsx")
    .then((module) => ({ default: module.Home })));
export const Cart = lazy(() => import("./cart.jsx")
    .then((module) => ({ default: module.Cart })));
export const ProductPage = lazy(() => import("./product.jsx")
    .then((module) => ({ default: module.ProductPage })));
export const NotFound = lazy(() => import("./notfound.jsx")
    .then((module) => ({ default: module.NotFound })));