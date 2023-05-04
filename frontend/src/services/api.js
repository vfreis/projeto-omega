import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5000/",
});

export const login = async (data) => {
  return await axiosInstance.post("login", data);
};

export const signupApi = async (data) => {
  return await axiosInstance.post("inserircadastro", data);
};

export const schedule = async (data) => {
  return await axiosInstance.post("agenda", data);
};


