import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { About, Home, NotFound, Login, Register } from "../../pages";
import { Layout } from "..";
const Root = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route sensitive exact path="/" component={Home} />
        <Route sensitive exact path="/about" component={About} />
        <Route sensitive exact path="/register" component={Register} />
        <Route sensitive exact path="/login" component={Login} />
        <Route sensitive exact path="*" component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Root;
