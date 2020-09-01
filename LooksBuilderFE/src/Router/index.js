import {BrowserRouter, Route, Switch} from 'react-router-dom'
import React from 'react';

import Builder from '../pages/LooksBuilder/';

const Router = (props) => {
    return(
        <BrowserRouter>
            <Switch>
                <Route component = {Builder} path="/" exact />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;