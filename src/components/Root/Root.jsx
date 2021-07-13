import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { About, Home, OfferDetails, SignIn, SignUp, Register, MyOffers, VerifyEmail, RecoverPassword } from "../../pages";
import { Layout } from "..";

const Root = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/sign_in" component={SignIn} />
        <Route exact path="/sign_up" component={SignUp} />
        <Route exact path="/register_offer" component={Register} />
        {/* <Route exact path="/forgot_password" component={ForgotPassword} /> */}
        <Route exact path="/about" component={About} />
        <Route exact path="/my_offers" component={MyOffers} />
        <Route exact path="/verify_email" component={VerifyEmail} />
        <Route exact path="/recover_password" component={RecoverPassword} />
        <Route exact path="/offer/:id" render={(props) => <OfferDetails {...props} />} />
        <Route path="/" render={(props) => <Home {...props} />} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Root;
