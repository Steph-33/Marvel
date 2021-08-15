import React from 'react';
import { Route, Switch } from 'react-router';
import Characters from '../pages/Characters';
import Comics from '../pages/Comics';
import Favorites from '../pages/Favorites';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Characters}/>
            <Route exact path="/comics" component={Comics}/>
            <Route exact path="/favorites" component={Favorites}/>
        </Switch>
    )
}
