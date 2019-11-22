import React,{Component} from 'react'
import Projects from "../components/Projects";
import Landing from "../components/Landing";

export default class Home extends Component{
    constructor(props) {
        super(props);
        let userId = localStorage.getItem('userId');
        this.state = {
            isAuthenticated: userId ? true: false,
            userId: userId
        }
    }
    componentDidMount(){
        console.log('the home component is mounted')
    }
    componentDidUpdate() {
        console.log('the update is called');
    }
    render() {
        return (
            <div className="home">
                {this.state.isAuthenticated ? <Projects userId={this.state.userId}/> : <Landing />}
            </div>
        )
    }
}
