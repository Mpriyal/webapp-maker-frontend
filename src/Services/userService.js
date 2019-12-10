import axios from "axios";
const API_URL = "https://webapp-maker-neu.herokuapp.com/";
// const API_URL = "http://localhost:4000/";

const getAllUsers = async () => {
    return axios.get(API_URL + 'api/user', {withCredentials: true, credentials: 'include'});
};
const registerUser = async (userData) => {
   return axios.post(API_URL + 'api/register', userData, {withCredentials: true, credentials: 'include'});
};
const deleteUser = async (userId) => {
    return axios.delete(API_URL + 'api/user/' + userId , {withCredentials: true, credentials: 'include'});
};
const updateUser = async (userId, userData) => {
   return axios.put(API_URL + 'api/user/' + userId , userData, {withCredentials: true, credentials: 'include'});
};
const loginUser = async (userData) => {
   return axios.post(API_URL + 'api/login', userData,{withCredentials: true, credentials: 'include'});
};
const getprojectsForUser = async (userId) => {
   return axios.get(API_URL + 'api/user/' + userId + '/project')
};
export {registerUser, loginUser, getprojectsForUser, updateUser, getAllUsers , deleteUser}

