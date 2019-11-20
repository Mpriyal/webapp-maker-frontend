import axios from "axios";
const API_URL = "http://localhost:4000/";

const createProjectForUser = async (userId, project) => {
    let projectRes = await axios.post(API_URL + 'api/user/' + userId + '/project', project);
    return projectRes
};

const deleteProject = async (userId, projectId) => {
    return axios.delete(API_URL + 'api/user/' + userId + '/project/' + projectId);
};

export {createProjectForUser, deleteProject}