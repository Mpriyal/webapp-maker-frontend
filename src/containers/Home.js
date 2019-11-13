import React,{Component} from 'react'
import Projects from "../components/Projects";
import Landing from "../components/Landing";

export default class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false
        }
    }

    render() {
        return (
            <div className="home">
                {this.state.isAuthenticated ? <Projects/> : <Landing />}
            </div>
        )
    }
}
