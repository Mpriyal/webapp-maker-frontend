import React,{Component} from 'react'
import Projects from "../components/Projects";
import Landing from "../components/Landing";
import connect from "react-redux/es/connect/connect";

class Home extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="home">
                {this.props.loggedIn ? <Projects userId={this.props.user._id}/> : <Landing />}
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

export default connect(mapStateToProps,{})(Home)
