import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Minicart from "../pages/Minicart";
import Details from "../pages/Details";
import PageDefault from "../pages/PageDefault";
import CartProvider from "../context/CartContext";

export default function Routes() {
  return (
    <BrowserRouter>
      <CartProvider>
        <PageDefault>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/cart" component={Minicart} />
            <Route path="/details/:id" component={Details} />
            <Route path="*" component={Home} exact />
          </Switch>
        </PageDefault>
      </CartProvider>
    </BrowserRouter>
  );
}
