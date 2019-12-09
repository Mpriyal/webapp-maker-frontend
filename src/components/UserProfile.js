import React, {Component} from 'react';
import {Input} from '../UI/Input';
import Navbar from "./Navbar";
import {updateUser} from "../Services/userService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import connect from "react-redux/es/connect/connect";

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.user.firstName,
            lastName: this.props.user.lastName,
            email: this.props.user.email,
            password: this.props.user.password,
            username: this.props.user.username,
            phoneNo: this.props.user.phoneNo
        }
    }

    updateUserProfile = async (e) => {
        e.preventDefault();
        const userData = {
            username: this.state.username,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phoneNo: this.state.phoneNo
        };
        try {
            const user = await updateUser(this.props.user._id, userData);
            if(user) {
                this.props.onLogin(user.data[0]);
                toast("Updated Successfully");
                setTimeout(() => {
                    this.props.history.push('/')
                }, 4000)
            }
        }
        catch (e) {
            toast("Connection error");
        }
    };
    render() {
        return (
            <div className="login pt-5 container" style={{'height' : '100%'}}>
                <Navbar history={this.props.history}/>
                <div className={'card p-5 m-5 shadow-lg'} style={{'maxWidth': '900px'}}>
                    <h1 className={'mx-5 px-5'}>User Profile</h1>
                    <form className={'m-2 p-5'}>
                        <div className={'row'}>
                            <div className={'col-6'}>
                                <Input id='first-name'
                                       name= 'First Name'
                                       placeholder = 'Enter first name'
                                       type='text'
                                       value={this.state.firstName}
                                       onChange={(e) => this.setState({firstName: e})} />
                            </div>
                            <div className={'col-6'}>
                                <Input id='last-name'
                                       name= 'Last Name'
                                       placeholder = 'Enter last name'
                                       type='text'
                                       value={this.state.lastName}
                                       onChange={(e) => this.setState({lastName: e})} />
                            </div>
                        </div>
                        <Input id='email'
                               name= 'Email Address'
                               placeholder = 'Email address'
                               type='email'
                               value={this.state.email}
                               onChange={(e) => this.setState({email: e})} />
                        <Input id='username'
                               name= 'Username'
                               placeholder = 'Username'
                               value={this.state.username}
                               type='text'
                               onChange={(e) => this.setState({username: e})} />
                        <Input id='phoneNo'
                               name= 'Phone Number'
                               placeholder = 'Phone Number'
                               value={this.state.phoneNo}
                               type='text'
                               onChange={(e) => this.setState({phoneNo: e})} />
                        <Input id='password'
                               name= 'Password'
                               placeholder = 'Password'
                               value={this.state.password}
                               type='password'
                               onChange={(e) => this.setState({password: e})} />
                        <button
                            disabled={!this.state.password && !this.state.firstName && !this.state.lastName && !this.state.email &&
                            !this.state.username && !this.state.phoneNo && !this.state.password }
                            onClick={this.updateUserProfile}
                            type="button"
                            className="btn btn-primary mt-4">Save</button>
                    </form>
                </div>
                <ToastContainer/>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onLogin: (user) =>  dispatch({type: 'LOGIN', user})
    }
};

const mapStateToProps = state => {
    return {
        user: state.user
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(UserProfile)
