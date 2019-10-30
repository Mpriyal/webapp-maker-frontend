import React from 'react'
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import Entity from './containers/Entity'
import EditEntity from './components/EditEntity'
import Login from './components/Login'
import Home from "./containers/Home";
import AttributeEdit from "./components/AttributeEdit";
import Register from "./components/Register";

const RouterComponent = () =>{
    return (
        <Router>
            <Route path='/' component={Home}/>
            <Route exact path='/entity' component={Entity}/>
            <Route exact path='/entity/:editId/edit' component={EditEntity}/>
            <Route exact path='/entity/:editId/field/:id/edit' component={AttributeEdit}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
        </Router>
    )
};

export default RouterComponent
