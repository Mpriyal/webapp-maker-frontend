import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { registerUser } from '../Services/userService'
import {Input} from '../UI/Input';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '', lastName: '', email: '', password: '', confirmPassword: '', username: 'abc'
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
            console.log('the state', this.state)
            // const user = await registerUser(userData);
            // if(user) {
            //     this.props.history.push('/');
            // }
        }
        catch (e) {
            alert('Not able to register')
        }
    };
    render() {
        return (
            <div className="login pt-5 container" style={{'height' : '100%'}}>
                <div className={'card p-5 m-5 shadow-lg'} style={{'maxWidth': '900px'}}>
                    <h1 className={'mx-5 px-5'}>Register</h1>
                    <form className={'m-5 p-5'}>
                        <div className={'row'}>
                            <div className={'col-6'}>
                                <Input id='first-name'
                                       name= 'First Name'
                                       placeholder = 'Enter first name'
                                       type='text'
                                       onChange={(e) => this.setState({firstName: e})} />
                            </div>
                            <div className={'col-6'}>
                                <Input id='last-name'
                                       name= 'Last Name'
                                       placeholder = 'Enter last name'
                                       type='text'
                                       onChange={(e) => this.setState({lastName: e})} />
                            </div>
                        </div>
                        <Input id='email'
                               name= 'Last Name'
                               placeholder = 'Email address'
                               type='email'
                               onChange={(e) => this.setState({email: e})} />
                        <Input id='password'
                               name= 'Password'
                               placeholder = 'Password'
                               type='password'
                               onChange={(e) => this.setState({password: e})} />
                        <Input id='retype-password'
                               name= 'Retype Password'
                               placeholder = 'Re-type Password'
                               type='password'
                               onChange={(e) => this.setState({confirmPassword: e})} />
                        <button onClick={this.handleRegister} type="button" className="btn btn-primary mt-4">Submit</button>
                    </form>
                    <Link className={'mx-5 px-5'} to={'/login'}>Have an account? Login.</Link>
                </div>
            </div>
        );
    }
}

export default Register;
