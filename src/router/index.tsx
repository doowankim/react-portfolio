import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header, Footer } from "../components";
import { Home, About } from "../containers";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
