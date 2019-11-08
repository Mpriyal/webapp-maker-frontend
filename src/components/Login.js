import React from 'react'
import { Link } from 'react-router-dom';
import {Input} from '../UI/Input';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: ''}
    }

    submitLogin = () => {
        console.log('The email and password', this.state.email, this.state.password);
    };
    render() {
        return (
            <div className="login pt-5" style={{'height': '100%'}}>
                <div className={'container'}>
                    <div className={'card p-5 m-5 shadow-lg'} style={{'maxWidth': '900px'}}>
                        <h1 className={'mx-5 px-5'}>Sign In</h1>
                        <form className={'m-5 p-5'}>
                            <Input id='email'
                                   name='Email address'
                                   placeholder='Enter email'
                                   type='email'
                                   onChange={(e) => this.setState({email: e})}/>
                            <Input id='password'
                                   name='Password'
                                   placeholder='Password'
                                   type='password'
                                   onChange={(e) => this.setState({password: e})}/>
                            <button type="button" onClick={() => this.submitLogin()} className="btn btn-primary mt-4">Submit</button>
                        </form>
                        <Link className={'mx-5 px-5'} to={'/register'}>Dont Have an account? Register.</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
