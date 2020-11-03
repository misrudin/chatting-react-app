import axios from "axios";
import { getData } from "../utils";

let baseUrl = process.env.REACT_APP_BASE_URL;

export const getDataWaitingChat = async () => {
  return await axios.get(baseUrl + "admin/chat_waiting");
};

export const getDataListChat = async () => {
  let idAdmin = getData("userData").id_customer;
  return await axios.get(baseUrl + `admin/chat_list/${idAdmin}`);
};
