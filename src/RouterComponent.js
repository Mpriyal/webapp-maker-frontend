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
            <Route exact path='/' component={Home}/>
            <Route exact path='/entity' component={Entity}/>
            <Route exact path='/entity/:editId/edit' component={EditEntity}/>
            <Route exact path='/entity/:entityId/field/:fieldId/edit' component={AttributeEdit}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/new' component={EditEntity}/>
        </Router>
    )
};

export default RouterComponent
