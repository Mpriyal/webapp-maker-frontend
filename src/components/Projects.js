import React, {Component} from 'react';
import Navbar from "./Navbar";
import {getprojectsForUser} from "../Services/userService";
import {createProjectForUser} from "../Services/projectService";
import {deleteProject} from "../Services/projectService";
import {updateProject} from "../Services/projectService";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: props.userId,
            projects: [],
            inputValue: '',
            editingProject: null
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
                                projects: projectsList,
                                inputValue: ''
                            });
                        }
                    });
        }
        catch (e) {
            console.log('Cannot get projects for this user', e)
        }
    };

    addNewProject = async() => {
        let projectName = "";
        if(this.state.inputValue){
            projectName = this.state.inputValue
        }
        else {
            projectName = "Default Project"
        }
        const defaultProject = {
            "projectName": projectName
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

    updateCurrentProject = async() => {
        if(this.state.editingProject.name !== this.state.inputValue && this.state.inputValue !== '') {
            const project = {
                "projectName": this.state.inputValue
            };
            try {
                updateProject(this.state.userId, this.state.editingProject.id, project).then((res) => {
                    let updatedProject = res.data;
                    if (updatedProject) {
                        this.getProjectsForUser(this.state.userId)
                    }
                });
            } catch (e) {
                console.log('Cannot update project', e)
            }
        }
    };

    editProjectName = async(project) => {
        this.setState({
            inputValue : project.name,
            editingProject: project
        })
    };

    updateInputValue = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    };

    render() {
        return (
            <div>
                <Navbar/>
                <div className="list-group mx-4" style={{"marginTop":"3rem"}}>
                    {/*<button type="button"*/}
                    {/*        className="btn btn-outline-primary my-2"*/}
                    {/*        onClick={this.addNewProject}*/}
                    {/*>Add New Project*/}
                    {/*</button>*/}
                    <div className="input-group mb-3 border border-secondary rounded">
                        <input type="text"
                               className="form-control"
                               placeholder="Enter Project Name"
                               aria-label="Project Name"
                               aria-describedby="basic-addon2"
                               value={this.state.inputValue}
                               onChange={this.updateInputValue}
                        />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary"
                                        type="button"
                                        onClick={this.addNewProject}>
                                    <i className="fa fa-plus"/>
                                </button>
                            </div>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary"
                                    type="button"
                                    onClick={this.updateCurrentProject}>
                                <i className="fa fa-check"/>
                            </button>
                        </div>
                    </div>
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
                            <div className='col-6' style={{"display":"inline"}}>
                                <i onClick={() => this.editProjectName(project)}
                                   className="fa fa-edit px-2"
                                   style={{"float":"right","paddingTop":"1px"}}/>
                            </div>
                        </a>
                    )}
                </div>
            </div>
        );
    }
}

export default Projects;
