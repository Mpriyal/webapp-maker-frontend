import React, {Component} from 'react';
import {deleteUser, getAllUsers, updateUser} from "../Services/userService";
import Navbar from "./Navbar";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state= {
            users: [],
            editing: '',
            firstName:'',
            lastName: '',
            username: '',
            phoneNo: '',
            email: '',
            password: '',
            role: ''
        }

    }
    componentDidMount(){
        this.getUsers();
    }
    getUsers = async () => {
        try{
            let usersResult = await getAllUsers();
            if(usersResult) {
                this.setState({users: usersResult.data })
            }
        }catch (e) { console.log('no connections') }
    };
    onSave = async (user) => {
        let userObj = {
            firstName:this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            phoneNo: this.state.phoneNo,
            email: this.state.email,
            password: this.state.password,
            role: this.state.role
        };
        try{
            let updatedUser = await updateUser(user._id, userObj);
            if (updatedUser) {
                this.getUsers()
            }
        }catch (e) {
            console.log(e)
        }
        this.setState({editing: ''})
    };
    onUpdate = (user) =>{
        this.setState({
            editing: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            phoneNo: user.phoneNo,
            email: user.email,
            password: user.password,
            role: user.role
        })
    };
    onDelete = async (user) =>{
        try {
            let deletedUser = await deleteUser(user._id);
            if(deletedUser) {
                this.getUsers();
            }
        } catch (e) {
            console.log(e)
        }
    };

    render() {
        return (
            <div>
                <div>
                    <Navbar history={this.props.history} logout={()=> this.getProjectsForUser(this.props.userId)}/>
                    <div className="list-group mx-4" style={{"marginTop":"3rem"}}>
                        <h3 className={'my-4'}>Admin Panel</h3>
                        <table className="table">
                            <thead className={'thead-dark'}>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">Phone No</th>
                                <th scope="col">Role</th>
                                <th scope="col">Edit</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.users.map(user => (
                                <tr key={user._id}>
                                    <td>{user._id}</td>
                                    <td>{this.state.editing !== user._id ? user.firstName: <input onChange={(e) => this.setState({firstName: e.target.value})} value={this.state.firstName} type="text"/>} </td>
                                    <td>{this.state.editing !== user._id ? user.lastName: <input onChange={(e) => this.setState({lastName: e.target.value})} value={this.state.lastName} type="text"/>} </td>
                                    <td>{this.state.editing !== user._id ? user.username: <input onChange={(e) => this.setState({username: e.target.value})} value={this.state.username} type="text"/>} </td>
                                    <td>{this.state.editing !== user._id ? user.email: <input onChange={(e) => this.setState({email: e.target.value})} value={this.state.email} type="text"/>} </td>
                                    <td>{this.state.editing !== user._id ? user.password: <input onChange={(e) => this.setState({password: e.target.value})} value={this.state.password} type="text"/>} </td>
                                    <td>{this.state.editing !== user._id ? user.phoneNo: <input onChange={(e) => this.setState({phoneNo: e.target.value})} value={this.state.phoneNo} type="text"/>} </td>
                                    <td>{this.state.editing !== user._id ? user.role || 'customer':
                                        <select className="form-control" id="role" value={this.state.role} onChange={(e) => this.setState({role: e.target.value})}>
                                            <option value={'customer'}>Customer</option>
                                            <option value={'admin'}>Admin</option>
                                        </select>} </td>
                                    <td>
                                        {this.state.editing !== user._id ? <i onClick={() => this.onUpdate(user)} className="fa fa-edit" />  : <i onClick={() => this.onSave(user)} className="fa fa-save" />}
                                        <i onClick={() => this.onDelete(user)} className="fa fa-trash mx-4" />
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin;
