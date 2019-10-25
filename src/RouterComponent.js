import React from 'react'
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import Entity from './containers/Entity'
import EditEntity from './components/EditEntity'
import Login from './components/Login'
import Home from "./containers/Home";

const RouterComponent = () =>{
    return (
        <Router>
            <Route path='/' component={Home}/>
            <Route path='/entities' component={Entity}/>
            <Route path='/edit' component={EditEntity}/>
            <Route path='/new' component={EditEntity}/>
            <Route path='/login' component={Login}/>
        </Router>
    )
};

export default RouterComponent
