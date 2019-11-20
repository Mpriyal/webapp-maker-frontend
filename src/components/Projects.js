import React, {Component} from 'react';
import Navbar from "./Navbar";
import {getprojectsForUser} from "../Services/userService";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            n: [{id: 1, name: 'Project 1 '},{id: 2, name: 'Project 2 '},{id: 3, name: 'Project 3 '} ],
            projects: []
        };
        this.getProjectsForUser(this.props.userId)
    }

    getProjectsForUser = (userId) => {
        getprojectsForUser(userId).then((res) => {
            let projectsList = [];
            res.data.map(project => projectsList.push({id: project._id, name: project.projectName}));
            this.setState({
                projects: projectsList
            });
        });
        return this.state.projects;
    };

    render() {
        return (
            <div>
                <Navbar/>
                <h1>Hey there</h1>
                {this.state.projects.map(v => (
                    <li key={v.id}>{v.name}</li>
                ))}
            </div>
        );
    }
}

export default Projects;
