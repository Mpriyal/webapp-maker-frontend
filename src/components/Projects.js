import React, {Component} from 'react';
import Navbar from "./Navbar";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [{id: 1, name: 'Project 1 '},{id: 2, name: 'Project 2 '},{id: 3, name: 'Project 3 '} ]
        }
    }

    render() {
        return (
            <div>
                <Navbar/>
                {this.state.projects.map(v => (
                    <li>{v.name}</li>
                ))}
            </div>
        );
    }
}

export default Projects;
