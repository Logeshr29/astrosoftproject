// axiosService.js
import axios from 'axios';
import apiConfig from './apiConfig'; // Adjust the path as needed

const authaxiosService = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiConfig.accessToken}`,
  },
});

const axiosService = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    'Content-Type': 'application/json',
    // No Authorization header for this instance
  },
});
const apiService = {
  
  authpostMethod: (apiName, data) => {

    console.log(apiName, "authapiss");
    console.log(authaxiosService.accessToken,"baseurlee");
    console.log(axiosService.baseURL,"11111111111111111");

    return authaxiosService.post(`${apiName}`, data);
  },
  postMethod: (apiName, data) => {
    console.log(apiName, "apiddddddddddsss");
    console.log(axiosService.baseURL,"baseurlee");
    return axiosService.post(`${apiName}`, data);
  },

  getMethod1: (apiName, genderid) => {
    console.log(apiName, genderid);
    console.log(axiosService.baseURL, "baseurlee");

    // Append genderid as a query parameter
    const urlWithQuery = `${apiName}/${genderid}`;
    console.log(urlWithQuery)
    return axiosService.get(urlWithQuery);
},
  getMethod: (apiName) => {
    return axiosService.get(`${apiName}`);
  },
};

export default apiService;
