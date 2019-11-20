import React,{Component} from 'react'
import Projects from "../components/Projects";
import Landing from "../components/Landing";

export default class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: true,
            userId: "5dc512a400fa8a5439d64361"
        }
    }

    render() {
        return (
            <div className="home">
                {this.state.isAuthenticated ? <Projects userId={this.state.userId}/> : <Landing />}
            </div>
        )
    }
}
