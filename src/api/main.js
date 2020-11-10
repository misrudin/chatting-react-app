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


export const getDataChatByIdRoom = async (id_room) => {
  return await axios.get(baseUrl + `chat/${id_room}`);
};


export const sendMessage = async (data) => {
  return await axios.post(baseUrl + `chat/send_message`,data);
};
