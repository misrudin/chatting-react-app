import React, { useEffect, useRef } from "react";
import { Message } from "../atoms";
import { getData } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "../../api";


const Messages = ({scroll=false, onSelect}) => {
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

  const _scrollToBottom = () => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  };
  useEffect(()=>{
    socket.on('new_message', (message)=>{
    if (!message.extras){
      message.extras = null
    }else {
      message.extras = JSON.stringify(message.extras)
    }
    message.type = "message"
    message.send_by = message.sender_by
    // console.log("new message", message);
    dispatch({
      type:"ADD_DATA_CHAT",
      data: message
    })
    _scrollToBottom()
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
      const date = chat.date_add.split(' ')[0];
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

// const list = dataChat && groupByDate(sortMessage())
const refs = dataChat.reduce((acc, value) => {
  acc[value.id_chat] = React.createRef();
  return acc;
}, {});

const handleClick = data =>{
  refs[data.id_chat].current.scrollIntoView({
    // behavior: '',
    block: 'center',
  });
  refs[data.id_chat].current.classList.add('target')
  deleteClass(refs[data.id_chat].current)
}
    


const deleteClass = (el)=>{
  setTimeout(()=>{
      el.classList.remove('target')  
  },1000)
}


const onReply = (data)=>{
  onSelect()
  dispatch({
    type:'SELECT_CHAT',
    data: data
  })
}

//  console.log(groupByDate(sortMessage(dataChat)));
// console.log(dataChat);

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
                  ref={refs[message.id_chat]}
                  me={message.send_by === me && message.type === "message"}
                  other={message.send_by !== me && message.type === "message"}
                  boot={message.type === "system"}
                  content={message.message}
                  time={message.date_add}
                  onReply={()=> onReply(message)}
                  id={message.id_chat}
                  extra={JSON.parse(message.extras)}
                  onClick={(data)=>handleClick(data)}
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

