import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Register extends Component {
    render() {
        return (
            <div className="login pt-5" style={{'height' : '100%'}}>
                <div className={'container'}>
                    <div className={'card p-5 m-5 shadow-lg'} style={{'maxWidth': '900px'}}>
                        <h1 className={'mx-5 px-5'}>Register</h1>
                        <form className={'m-5 p-5'}>
                            <div className={'row'}>
                                <div className={'col-6'}>
                                    <div className="form-group">
                                        <label htmlFor="first-name">First Name</label>
                                        <input type="text" className="form-control" id="first-name"
                                               placeholder="Enter first name" />
                                    </div>
                                </div>
                                <div className={'col-6'}>
                                    <div className="form-group">
                                        <label htmlFor="last-name">Last Name</label>
                                        <input type="text" className="form-control" id="last-name"
                                               placeholder="Enter last name" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                       placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword2">Retype Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword2"
                                       placeholder="Re-type Password" />
                            </div>
                            <button type="submit" className="btn btn-primary mt-4">Submit</button>
                        </form>
                        <Link className={'mx-5 px-5'} to={'/login'}>Have an account? Login.</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
