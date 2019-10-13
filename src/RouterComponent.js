import React from 'react'
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import Entity from './containers/Entity'

const RouterComponent = () =>{
    return (
        <Router>
            <Route path="/entities"><Entity/></Route>
        </Router>
    )
};

export default RouterComponent
