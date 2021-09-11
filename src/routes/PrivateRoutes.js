import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { isLogin } from '../utils';

function PrivateRoutes({ component: Component, ...rest }) {
    return (
        <Route render={props => (isLogin() ? <Component {...props} {...rest} /> : <Redirect to="/signin" />)} />
    )
}

export default PrivateRoutes
