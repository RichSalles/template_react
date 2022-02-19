import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Exemple from './components/Example/Exemple';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';


function Routes() {
    return(
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
    );
}

export default Routes;