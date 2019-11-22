import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
import axios from 'axios'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loggedIn: false}
    }

    componentDidMount() {
        this.getCurrentUser()

    }
    componentDidUpdate(prevProps) {
        if (this.props.loggedIn !== prevProps.loggedIn) {
            this.getCurrentUser()
        }
    }
    getCurrentUser = async () => {
        try {
            let currentUser = await axios.get('http://localhost:4000/api/profile',{withCredentials: true});
            if(currentUser) {
                console.log('the current ', currentUser)
                if(currentUser.data.length > 0) {
                    this.setState({loggedIn: true, user: currentUser.data[0] });
                }
            }
        }catch (e) {
            console.log('the error is', e)
        }
    };
    logout = async () => {
        try {
            let logoutButton = await axios.post('http://localhost:4000/api/logout',{withCredentials: true});
            if(logoutButton) {
                localStorage.removeItem('userId');
                this.setState({loggedIn: false});
                this.props.history.push('/');
            }
        }catch (e) {
            console.log('the error is', e)
        }
    };
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{backgroundColor: '#007bff'}}>
                <Link className="navbar-brand" to="/">WebAppMaker</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        {this.state.loggedIn && this.state.user.firstName &&
                        <p className={'mx-4 text-white mt-3'}>{this.state.user.firstName} {this.state.user.lastName}</p>}
                        {this.state.loggedIn && <button onClick={this.logout} className="btn btn-success my-2 my-sm-0" type="submit">
                            Logout
                        </button>}
                        {!this.state.loggedIn && <Link className="nav-item nav-link" to="/login">
                            <button className="btn btn-success my-2 my-sm-0" type="submit">
                                Login
                            </button>
                        </Link>}
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
