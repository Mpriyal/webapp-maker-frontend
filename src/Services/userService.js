import axios from "axios";
const API_URL = "http://localhost:4000/";

const registerUser = async (userData) => {
   return axios.post(API_URL + 'api/register', userData, {withCredentials: true, credentials: 'include'});
};
const loginUser = async (userData) => {
   return axios.post(API_URL + 'api/login', userData,{withCredentials: true, credentials: 'include'});
};
const getprojectsForUser = async (userId) => {
   return axios.get(API_URL + 'api/user/' + userId + '/project')
};
export {registerUser, loginUser, getprojectsForUser }
