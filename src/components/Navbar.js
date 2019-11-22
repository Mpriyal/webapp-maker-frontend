import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
import axios from 'axios'
import { connect } from 'react-redux';

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
                    // this.setState({loggedIn: true, user: currentUser.data[0] });
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
                this.props.onLogout();
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
                        {this.props.loggedIn && this.props.user.firstName &&
                        <p className={'mx-4 text-white mt-3'}>{this.props.user.firstName} {this.props.user.lastName}</p>}
                        {this.props.loggedIn && <button onClick={this.logout} className="btn btn-success my-2 my-sm-0" type="submit">
                            Logout
                        </button>}
                        {!this.props.loggedIn && <Link className="nav-item nav-link" to="/login">
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
const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn,
        user: state.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () =>  dispatch({type: 'LOGOUT'})
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Navbar)
