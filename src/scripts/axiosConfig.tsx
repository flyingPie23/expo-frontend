import axios from "axios";

const token = localStorage.getItem("token")


export const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:3001/',
  headers: {
      Authorization: token ? token : '',
      'Content-Type': 'application/json'
    }
  });

export const isSignedIn = () => {
  const token = localStorage.getItem("token");
  return token !== null && token !== '';
}
