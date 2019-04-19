import React from 'react';
import {Homepage} from '../pages/Homepage';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from './Navbar';
import {Recipes} from '../pages/Recipes'
import {SingleRecipes} from '../pages/SingleRecipes';


class App extends React.Component {

    render() {
        return (
            <Router>
                <Navbar sticky="top" />
                <main>
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route exact path="/recipes" component={Recipes} />
                        <Route path="/recipes/:id" component={SingleRecipes} />
                    </Switch>
                </main>
            </Router>
        )
    }
}



export default App;