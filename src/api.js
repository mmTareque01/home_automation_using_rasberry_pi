import axios from 'axios';
export const BASE_URL = 'http://192.168.0.101:5000'

const configParamsWithToken = () => {
    return {
      "Content-Type": "application/json, text",
    }
  };


export const CONTROLLER = data => {
  return axios.post(`http://192.168.0.101:5000/controller`, data, {
    headers: configParamsWithToken(),
  });
};

