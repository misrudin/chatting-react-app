import React,{useEffect, useState,useRef} from "react";
import { Header } from "../../templates";
import { Messages } from "../../components";
import "../../styles/pages.scss";
import { FiSmile, FiPaperclip, FiSend } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage,joinRoom,sendMessageSocket} from "../../api";
import moment from 'moment';

import {getData, randomString} from '../../utils'
import { FaTimes } from "react-icons/fa";
import { NoSelectedUser } from "../../assets";

const HomePage = () => {
  const {selectedUser} = useSelector(state => state.mainState)
  const {selectedChat} = useSelector(state => state.chatState)
  const [message, setMessage] = useState("")
  const [scroll, setScroll] = useState(false)
  const dispatch = useDispatch()
  const isMe = getData("userData")
  const inputRef = useRef()

  useEffect(()=>{
    const data = {
      id_customer: getData("userData").id_customer,
      is_admin: true
    }
    joinRoom(data)
  },[])

  // console.log(selectedUser);

  // console.log(getData("userData"));

  // console.log(selectedChat);


  const onSendMessage=()=>{
    const timeinmilis = new Date().getTime()
    const randomStr = randomString(8)
    const uid =  `web_${timeinmilis}${randomStr}`

    const extras = selectedChat ? {
      type: "message",
      id_chat: selectedChat.id_chat,
      message: selectedChat.message,
      sender_name:  selectedChat.send_by === isMe.id_customer ? isMe.name : selectedUser.room_name
    } : null

    const date =new Date()
    const dateFormated = moment(date).format("yyyy-MM-DD HH:mm:ss")
    const data ={
      message: message,
      send_by: getData("userData").id_customer,
      room_id: selectedUser.id_room,
      unique_id: uid,
      date_add: dateFormated,
      extras: extras
    }
    sendMessage(data).then(res=>{
      setMessage("")
      const response = res.data.result
      const user = getData("userData")
      const postData = {
        idMessage:response.id_chat,
        idRoom: response.room_id,
        message: response.message,
        senderName: user.username,
        senderId: user.id_customer,
        dateAdd: new Date(response.date_add).toISOString(),
        type:"message",
        state:2,
        deleted:false,
        uniqueId: response.unique_id,
        extras: response.extras
      }

      const newChat = {
        date_add: postData.dateAdd,
        deleted: false,
        id_chat: response.id_chat,
        id_room: response.room_id,
        message:data.message,
        send_by: data.send_by,
        status: postData.state,
        type: postData.type,
        unique_id: data.unique_id,
        extras: JSON.stringify(data.extras)
      }
      dispatch({
        type:"ADD_DATA_CHAT",
        data:newChat
      })
      setScroll(old=> !old)
      sendMessageSocket(postData)
      clearSelec()
    }).catch(e=>{
      console.log(e.response);
    })
  }


  const clearSelec=()=>{
    inputRef.current.focus()
    dispatch({
      type:"DESELECT_CHAT"
    })
  }
  return (
    <div className="container-main">
      {
        selectedUser && <Header data={selectedUser} />
      }
      {
        selectedUser && 
        <div className="main-content">
        <Messages scroll={scroll} onSelect={()=> inputRef.current.focus()} />
        <div className={`main-footer`}>
          <div className={`reply-chat ${selectedChat ? "show" : ""}`}>
              {selectedChat && 
              <div className={`reply-chat-content`}>
                <h5 className={`user-name-reply ${selectedChat.send_by === isMe.id_customer ? "me" : "other"}`}>
                  {`Replying to ${selectedChat.send_by === isMe.id_customer ? "yourself" : selectedUser.room_name}`}
                  </h5>
                <p className="text-will-reply">{selectedChat?.message}</p>
              </div>
              }
              {selectedChat && 
              <div className="reply-chat-action">
                <FaTimes onClick={clearSelec} />
              </div>
              }
          </div>
          <div className={`input-chat-container ${selectedChat ? 'no-border' : ""}`}>
          <button className="btn btn-outline-light custom-btn">
            <FiSmile />
          </button>
          <div className="spacer10"></div>
          <div className="form-group">
            <input
              type="text"
              className="form-control input-chat"
              id="search"
              name="search"
              ref={inputRef}
              value={message}
              onChange={e=> setMessage(e.target.value)}
              autoComplete="off"
              placeholder="Write a message..."
              onKeyPress={e=> e.key === "Enter" ? onSendMessage() : null}
            />
          </div>
          <div className="spacer10"></div>
          <button className="btn btn-outline-light custom-btn">
            <FiPaperclip />
          </button>
          <div className="spacer10"></div>
          <div className="spacer10"></div>
          <button onClick={onSendMessage} className="btn btn-primary">
            <FiSend />
          </button>
          </div>
        </div>
      </div>
      }

      {!selectedUser && 
      <div className="empty-user">
        <img className="no-selected-user" src={NoSelectedUser} alt="No selected user"/>
      </div>
      }
    </div>
  );
};

export default React.memo(HomePage);
