import React, {Component} from 'react';
import Navbar from "./Navbar";
import {getprojectsForUser} from "../Services/userService";
import {createProjectForUser} from "../Services/projectService";
import {deleteProject} from "../Services/projectService";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: props.userId,
            projects: []
        };
        this.getProjectsForUser(this.state.userId)
    }

    getProjectsForUser = async(userId) => {
        try{
            getprojectsForUser(userId).then((res) => {
                        let projectsList = [];
                        res.data.map(project => projectsList.push({id: project._id, name: project.projectName}));
                        if(projectsList) {
                            this.setState({
                                projects: projectsList
                            });
                        }
                    });
        }
        catch (e) {
            console.log('Cannot get projects for this user', e)
        }
    };

    addNewProject = async() => {
        const defaultProject = {
            "projectName": "Default Project"
        };
        try{
            createProjectForUser(this.state.userId, defaultProject).then((res) => {
                let newProject = res.data;
                if(newProject){
                    this.getProjectsForUser(this.state.userId)
                }
            });
        }
        catch (e) {
            console.log('Cannot create new project',e)
        }

    };

    deleteProject = async(projectId) => {
        try {
            deleteProject(this.state.userId,projectId).then((res) => {
                let deletedProject = res.data;
                if(deletedProject){
                    this.getProjectsForUser(this.state.userId)
                }
            });
        }
        catch (e) {
            console.log('Cannot delete project', e)
        }
    };

    render() {
        return (
            <div>
                <Navbar/>
                <div className="list-group mx-4 my-4">
                    <button type="button"
                            className="btn btn-outline-primary my-2"
                            onClick={this.addNewProject}
                    >Add New Project
                    </button>
                    {this.state.projects.map(project =>
                        <a href="#"
                           className="list-group-item list-group-item-action"
                           key={project.id}
                        >{project.name}
                            <div className='col-6' style={{"display":"inline"}}>
                                <i onClick={() => this.deleteProject(project.id)}
                                   className="fa fa-trash"
                                   style={{"float":"right"}}/>
                            </div>
                        </a>
                    )}
                </div>
            </div>
        );
    }
}

export default Projects;
