import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeView from "../views/HomeView";

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeView} />       
      </Switch>
    </BrowserRouter>
  );
};

export default Root;