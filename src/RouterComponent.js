import React from 'react'
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import Entity from './containers/Entity'
import EditEntity from './components/EditEntity'
import Login from './components/Login'
import Home from "./containers/Home";
import AttributeEdit from "./components/AttributeEdit";
import Register from "./components/Register";
import UserProfile from "./components/UserProfile";
import Admin from "./components/Admin";

const RouterComponent = () =>{
    return (
        <Router>
            <Route exact path='/' component={Home}/>
            <Route exact path='/project/:projectId/entity' component={Entity}/>
            <Route exact path='/project/:projectId/entity/:editId/edit' component={EditEntity}/>
            <Route exact path='/project/:projectId/entity/:entityId/field/:fieldId/edit' component={AttributeEdit}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/profile' component={UserProfile}/>
            <Route path='/admin' component={Admin}/>
        </Router>
    )
};

export default RouterComponent
