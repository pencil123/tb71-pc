import React, { Component } from 'react'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import Home from '../pages/home/Home';

export class index extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </HashRouter>
        )
    }
}

export default index
