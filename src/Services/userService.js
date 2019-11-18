import axios from "axios";

const registerUser = async (userData) => {
   return axios.post('http://localhost:4000/api/register', userData, {withCredentials: true, credentials: 'include'});
};
const loginUser = async (userData) => {
   return axios.post('http://localhost:4000/api/login', userData,{withCredentials: true, credentials: 'include'});
};
export {registerUser, loginUser }
