import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AppliedRoute from './components/AppliedRoute';
import NotFound from './components/NotFound';

import Admin from './components/Admin';
import Cart from './components/Cart';
import Login from './components/Login';
import Logout from './components/Logout';
import SignUp from './components/SignUp';
import ShopHome from './components/ShopHome';
import ShopSearch from './components/ShopSearch';

export default ({ childProps }) => (
    <Switch>
        <AppliedRoute  path ="/" exact component={ShopHome} props={childProps} />
        <AppliedRoute path ="/Admin" exact component={Admin} props={childProps} />
        <AppliedRoute path ="/Cart" exact component={Cart} props={childProps} />
        <AppliedRoute path ="/Login" exact component={Login} props={childProps} />
        <AppliedRoute path ="/Logout" exact component={Logout} props={childProps} />
        <AppliedRoute path ="/SignUp" exact component={SignUp} props={childProps} />
        <AppliedRoute path ="/ShopHome" exact component={ShopHome} props={childProps} />
        <AppliedRoute path ="/ShopSearch" exact component={ShopSearch} props={childProps} />
        <Route component={NotFound} />
    </Switch>
)