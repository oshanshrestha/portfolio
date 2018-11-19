import React from 'react'
import { IndexRoute, Router, Route, hashHistory } from 'react-router'
import App from './containers/App'
import Home from './containers/Home'
import Projects from './containers/Projects'
import About from './containers/About'


export default (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/aboutme" component={About} />
        </Route>
    </Router>
);