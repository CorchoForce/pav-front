import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import About from '../pages/About'
import Search from '../pages/Search'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import User from '../pages/User'

const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/user" component={User} />
            <Route exact path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes