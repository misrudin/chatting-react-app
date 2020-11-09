import React from "react";
import moment from "moment";
import { noUserImage } from "../../assets";
import { useDispatch } from "react-redux";

const People = ({ data }) => {
  const dispatch = useDispatch()

  const handleSelectUser = (data)=>{
    dispatch({type: "SELECT_USER",data: data})
  }

  return (
    <div className="people" onClick={()=> handleSelectUser(data)}>
      <img
        src={data?.room_photo ? data?.room_photo : noUserImage}
        className="people-img"
        alt="people-img"
      />
      <div className="people-detail">
        <p className="people-detail-name">{data?.room_name}</p>
        <p className="people-detail-chat">{data?.message}</p>
      </div>
      <div className="people-chat-time">
        <span className="badge badge-primary custom-badge">{data?.badge}</span>
        <p className="chat-time">{moment(data?.date_add).format("HH:mm A")}</p>
      </div>
    </div>
  );
};

export default People;
