import "@fontsource/abel";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./style/global.css"
import "./style/repeat.css"

import { Route, BrowserRouter as Router, Routes } from "react-router";
import { Home, Cart, ProductPage, NotFound } from "./pages";
import { HomeLeyout } from "./leyout/home-leyout";
import { CartLeyout } from "./leyout/cart-leyout";
import { Suspense } from "react";
import React from "react";


function App() {

  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomeLeyout />} >
            <Route index element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Route>
          <Route path="/cart" element={<CartLeyout />} >
            <Route index element={<Cart />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App