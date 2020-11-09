import React, { useEffect, useRef } from "react";
import { Message } from "../atoms";
import { getData } from "../../utils";


const Messages = () => {

  let messagesData = []
  const me = getData("userData").id_customer;
  const containerRef = useRef();

  useEffect(() => {
    const _scrollToBottom = () => {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    };
    _scrollToBottom();
  }, []);



 

  return (
    <div className="messages" ref={containerRef}>
      {messagesData.map((message, i) => (
        <Message
          me={message.send_by === me && message.type === "message"}
          other={message.send_by !== me && message.type === "message"}
          boot={message.type === "system"}
          content={message.message}
          time={message.date_add}
        />
      ))}
    </div>
  );
};

export default Messages;
