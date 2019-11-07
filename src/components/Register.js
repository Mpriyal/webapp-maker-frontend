import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            username: 'abc'

        }
    }

    handleRegister = async (e) => {
        e.preventDefault();
        const userData = {
            username: this.state.username,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phoneNo: 12345
        };
        try {
            console.log(userData);
            const user = await axios.post('http://localhost:4000/api/register', userData);
            console.log('registration successful',user)
        }
        catch (e) {
            alert('Not able to register')
        }
        console.log(this.state);
    };
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
                                        <input
                                            onChange={(e) => this.setState({firstName: e.target.value})}
                                            type="text" className="form-control" id="first-name"
                                               placeholder="Enter first name" />
                                    </div>
                                </div>
                                <div className={'col-6'}>
                                    <div className="form-group">
                                        <label htmlFor="last-name">Last Name</label>
                                        <input
                                            onChange={(e) => this.setState({lastName: e.target.value})}
                                            type="text" className="form-control" id="last-name"
                                               placeholder="Enter last name" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input
                                    onChange={(e) => this.setState({email: e.target.value})}
                                    type="email" className="form-control" id="exampleInputEmail1"
                                       placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input
                                    onChange={(e) => this.setState({password: e.target.value})}
                                    type="password" className="form-control" id="exampleInputPassword1"
                                       placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword2">Retype Password</label>
                                <input
                                    onChange={(e) => this.setState({confirmPassword: e.target.value})}
                                    type="password" className="form-control" id="exampleInputPassword2"
                                       placeholder="Re-type Password" />
                            </div>
                            <button onClick={this.handleRegister} type="submit" className="btn btn-primary mt-4">Submit</button>
                        </form>
                        <Link className={'mx-5 px-5'} to={'/login'}>Have an account? Login.</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
