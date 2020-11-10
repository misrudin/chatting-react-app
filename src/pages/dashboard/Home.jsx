import React,{useEffect, useState} from "react";
import { Header } from "../../templates";
import { Messages } from "../../components";
import "../../styles/pages.scss";
import { FiSmile, FiPaperclip, FiSend } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage,joinRoom,sendMessageSocket} from "../../api";
import moment from 'moment';

import {getData, randomString} from '../../utils'

const HomePage = () => {
  const {selectedUser} = useSelector(state => state.mainState)
  const [message, setMessage] = useState("")
  const [scroll, setScroll] = useState(false)
  const dispatch = useDispatch()

  useEffect(()=>{
    const data = getData("userData").id_customer
    joinRoom(data)
  },[])

  


  const onSendMessage=()=>{
    const timeinmilis = new Date().getTime()
    const randomStr = randomString(8)
    const uid =  `web_${timeinmilis}${randomStr}`

    const date =new Date()
    const dateFormated = moment(date).format("yyyy-MM-DD HH:mm:ss")
    const data ={
      message: message,
      send_by: getData("userData").id_customer,
      room_id: selectedUser.id_room,
      unique_id: uid,
      date_add: dateFormated
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
        dateAdd: moment(response.date_add).format("yyyy-MM-DDTHH:mm:ss")+".000Z",
        type:"message",
        state:2,
        deleted:false,
        uniqueId: response.unique_id
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
      }
      dispatch({
        type:"ADD_DATA_CHAT",
        data:newChat
      })
      setScroll(old=> !old)
      sendMessageSocket(postData)
    }).catch(e=>{
      console.log(e.response);
    })
  }

  return (
    <div>
      <Header data={selectedUser} />
      <div className="main-content">
        <Messages scroll={scroll} />
        <div className="main-footer">
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
  );
};

export default React.memo(HomePage);
