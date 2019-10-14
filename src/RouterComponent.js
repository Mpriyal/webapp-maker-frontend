import React from 'react'
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import Entity from './containers/Entity'
import EditEntity from './components/EditEntity'

const RouterComponent = () =>{
    return (
        <Router>
            <Route path="/entities"><Entity/></Route>
            <Route path="/edit"><EditEntity /></Route>
        </Router>
    )
};

export default RouterComponent
