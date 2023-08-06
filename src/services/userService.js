import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/users";

export const getUsers = () => {
  return axios.get(baseUrl);
};

export const createUser = user => {
  return axios.post(baseUrl, user);
};
