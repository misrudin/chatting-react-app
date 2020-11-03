import axios from "axios";

let baseUrl = process.env.REACT_APP_BASE_URL;

export const loginApi = async (data) => {
  return await axios.post(baseUrl + "customer/login", data);
};
