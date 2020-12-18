import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/home'
import Products from './pages/products'
import Sigin from './pages/sigin'
import SiginUp from './pages/siginUp'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Products} path="/list" />
            <Route component={Sigin} path="/login" />
            <Route component={SiginUp} path="/register" />
        </BrowserRouter>
    );
}

export default Routes;