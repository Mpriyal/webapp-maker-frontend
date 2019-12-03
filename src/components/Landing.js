import React, {Component} from 'react';
import Navbar from "./Navbar";
import {Link} from "react-router-dom";

class Landing extends Component {
    render() {
        return (
            <div>
                <Navbar history={this.props.history}/>
                <div className={'container my-5'}>
                    <h1 className={'title font-weight-light my-5'}>Welcome to the web app maker.</h1>
                    <h3 className={'title font-weight-light my-5'}>Steps to create the web application.</h3>
                    <ul className="list-group list-group-flush my-5">
                        <li className="list-group-item">Create the project</li>
                        <li className="list-group-item">Create the entities in the project.</li>
                        <li className="list-group-item">For each project create the entities.</li>
                        <li className="list-group-item">Set the properties and realtions.</li>
                    </ul>
                    <div className={'row'}>
                        <div className={'col-6'}>
                            <Link className="nav-item nav-link" to="/login">
                                <button type="button" className="btn btn-outline-primary btn-block btn-outline btn-lg ">Login to see your projects.</button>
                            </Link>
                        </div>
                        <div className={'col-6'}>
                            <Link className="nav-item nav-link" to="/register">
                                <button type="button" className="btn btn-outline-success btn-block  btn-outline btn-lg ">Sign up to get started.</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
