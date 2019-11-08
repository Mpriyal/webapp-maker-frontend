import axios from "axios";

const registerUser = async (userData) => {
   return axios.post('http://localhost:4000/api/register', userData);
};
export {registerUser }
