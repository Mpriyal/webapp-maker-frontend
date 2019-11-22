import axios from "axios";
const API_URL = "https://webapp-maker-neu.herokuapp.com/";

const createProjectForUser = async (userId, project) => {
    let projectRes = await axios.post(API_URL + 'api/user/' + userId + '/project', project);
    return projectRes
};

const updateProject = async (userId, projectId, newProject) => {
    return axios.put(API_URL + 'api/user/' + userId + '/project/' + projectId, newProject);
};

const deleteProject = async (userId, projectId) => {
    return axios.delete(API_URL + 'api/user/' + userId + '/project/' + projectId);
};

export {createProjectForUser, deleteProject, updateProject}
