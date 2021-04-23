import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {
    About,
    Home,
    NotFound,
    Login,
    Register
} from '../../pages'
import { Layout } from '..'
const Routes = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="*" component={NotFound} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default Routes