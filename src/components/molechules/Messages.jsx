import React, { useEffect, useRef } from "react";
import { Message } from "../atoms";
import { getData } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "../../api";
import moment  from 'moment';


const Messages = (scroll=false) => {
  const {dataChat} = useSelector(state => state.mainState)
  const dispatch = useDispatch()

  const me = getData("userData").id_customer;
  const containerRef = useRef();

  useEffect(() => {
    const _scrollToBottom = () => {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    };
    _scrollToBottom();
  }, [dataChat,scroll]);

  useEffect(()=>{
    socket.on('new_message', (message)=>{
    let data = JSON.parse(message)
    const newChat = {
      date_add: moment(new Date(data.dateAdd)).format("yyyy-MM-DDTHH:mm:ss")+".000Z",
      deleted: false,
      id_chat: data.idMessage,
      id_room: data.idRoom,
      message:  data.message,
      send_by: data.senderId,
      status: data.state,
      type: "message",
      unique_id: data.uniqueId,
    }
    console.log("new message");
    dispatch({
      type:"ADD_DATA_CHAT",
      data: newChat
    })
  });
  },[dispatch])


  const sortMessage = (data) => {
    if (data) {
      let result = data.sort(function (a, b) {
        a = new Date(a.date_add);
        b = new Date(b.date_add);
        return a-b
      });
      return result;
    }
  };



const groupByDate =(data)=>{
  if(data){
    const groups = data.reduce((groups, chat) => {
      const date = chat.date_add.split('T')[0];
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(chat);
      return groups;
    }, {});
    
    // Edit: to add it in the array format instead
    const groupArrays = Object.keys(groups).map((date) => {
      return {
        date,
        chats: groups[date]
      };
    });
  
    return groupArrays
  }
}


const onReply = (data)=>{
  dispatch({
    type:'SELECT_CHAT',
    data: data
  })
}

 console.log(groupByDate(sortMessage(dataChat)));

  return (
    <div className="messages" ref={containerRef}>
      {
        dataChat && groupByDate(sortMessage(dataChat))?.map((data,index)=>{
          return (
            <div className="messages-container" key={index}>
            <p className="text-muted text-center py-3 date-chat-parent" >{data.date}</p>
            {
              data.chats.map((message,i)=>
                <Message
                  key={i}
                  me={message.send_by === me && message.type === "message"}
                  other={message.send_by !== me && message.type === "message"}
                  boot={message.type === "system"}
                  content={message.message}
                  time={message.date_add}
                  onReply={()=> onReply(message)}
                  id={message.id_chat}
                  extra={JSON.parse(message.extras)}
                />
              )
            }
            </div>
          )
        })
      }
    </div>
  );
};

export default React.memo(Messages);

