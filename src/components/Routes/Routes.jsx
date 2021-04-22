import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {
    About,
    Search,
    Home,
    NotFound,
    User
} from '../../pages'
import { Layout } from '..'
const Routes = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/user" component={User} />
                <Route exact path="*" component={NotFound} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default Routes