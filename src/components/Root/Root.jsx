import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { About, Home, OfferDetails, SignIn, SignUp, Register, MyOffers, VerifyEmail, ForgotPassword, UpdatePassword } from "../../pages";
import { Layout } from "..";

const Root = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/forgot_password" component={ForgotPassword} />
        <Route exact path="/my_offers" component={MyOffers} />
        <Route exact path="/offer/:id" render={(props) => <OfferDetails {...props} />} />
        <Route exact path="/register_offer" component={Register} />
        <Route exact path="/sign_in" component={SignIn} />
        <Route exact path="/sign_up" component={SignUp} />
        <Route exact path="/update_password" component={UpdatePassword} />
        <Route exact path="/verify_email" component={VerifyEmail} />
        <Route path="/" render={(props) => <Home {...props} />} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Root;
