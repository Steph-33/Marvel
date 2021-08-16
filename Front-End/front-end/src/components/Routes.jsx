import React from 'react';
import { Route, Switch } from 'react-router';
import Characters from '../pages/Characters';
import Comics from '../pages/Comics';
import Favorites from '../pages/Favorites';
import CharactersComics from '../pages/CharactersComics';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Characters}/>
            <Route exact path="/comics" component={Comics}/>
            <Route exact path="/favorites" component={Favorites}/>
            <Route exact path="/characters/:id/comics" component={CharactersComics} />
        </Switch>
    )
}
