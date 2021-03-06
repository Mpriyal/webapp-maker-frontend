import React from 'react'
import { Link } from 'react-router-dom';
import {Input} from '../UI/Input';
import Navbar from "./Navbar";
import {loginUser} from "../Services/userService";
import connect from "react-redux/es/connect/connect";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: '', loggedIn: false}
    }

    submitLogin = async () => {
        try {
            const user = await loginUser({email:this.state.email , password:this.state.password });
            if(user) {
                if(user.data.length > 0) {
                    this.props.onLogin(user.data[0]);
                    console.log(user.data[0]);
                    if (user.data[0].role === 'admin' || user.data[0].username === 'admin') {
                        this.props.history.push('/admin');
                    }
                    else {
                        this.props.history.push('/');
                    }
                }
                else{
                    toast("The Credentials are not correct");
                }
            }
        }catch (e) {
            toast("The login was successful");
            this.props.history.push('/login');
        }
    };
    render() {
        return (
            <div className="login pt-5" style={{'height': '100%'}}>
                <Navbar history={this.props.history}/>
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
                            <button
                                disabled={!this.state.email || !this.state.password}
                                type="button" onClick={() => this.submitLogin()} className="btn btn-primary mt-4">Submit</button>
                        </form>
                        <Link className={'mx-5 px-5'} to={'/register'}>Dont Have an account? Register.</Link>
                    </div>
                </div>
                <ToastContainer/>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn,
        user: state.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (user) =>  dispatch({type: 'LOGIN', user})
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Login)
