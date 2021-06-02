import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { About, Home, OfferDetails, SignIn, SignUp } from "../../pages";
import { Layout, NotFound } from "..";

const Root = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route sensitive exact path="/" render={(props) => <Home {...props} />} />
        <Route sensitive exact path="/sign_in" component={SignIn} />
        <Route sensitive exact path="/sign_up" component={SignUp} />
        {/* <Route sensitive exact path="/forgot_password" component={ForgotPassword} /> */}
        <Route sensitive exact path="/about" component={About} />
        <Route sensitive exact path="/offer/:id" render={(props) => <OfferDetails {...props} />} />
        <Route path="*" render={() => <NotFound text={"Página não encontrada"} />} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Root;
