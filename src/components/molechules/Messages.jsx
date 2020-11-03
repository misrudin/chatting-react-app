import React, { useEffect, useRef } from "react";
import { Message } from "../atoms";
import { getData } from "../../utils";

let messagesData = [
  {
    id_chat: 4,
    id_room: 2,
    message:
      "Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools.",
    send_by: 2,
    type: "system",
    date_add: "2020-11-02T04:34:28.000Z",
  },
  {
    id_chat: 3,
    id_room: 2,
    message: "Halo kak3",
    send_by: 2,
    type: "message",
    date_add: "2020-11-02T04:33:55.000Z",
  },
  {
    id_chat: 2,
    id_room: 2,
    message: "Halo kak2",
    send_by: 1,
    type: "message",
    date_add: "2020-11-02T04:33:25.000Z",
  },
  {
    id_chat: 1,
    id_room: 2,
    message: "Halo kak",
    send_by: 2,
    type: "message",
    date_add: "2020-11-02T04:32:04.000Z",
  },
  {
    id_chat: 1,
    id_room: 2,
    message: "Halo kak",
    send_by: 2,
    type: "message",
    date_add: "2020-11-02T04:32:04.000Z",
  },
  {
    id_chat: 1,
    id_room: 2,
    message: "Halo kak",
    send_by: 2,
    type: "message",
    date_add: "2020-11-02T04:32:04.000Z",
  },
  {
    id_chat: 1,
    id_room: 2,
    message: "Halo kak",
    send_by: 2,
    type: "message",
    date_add: "2020-11-02T04:32:04.000Z",
  },
  {
    id_chat: 1,
    id_room: 2,
    message: "Halo kak",
    send_by: 2,
    type: "message",
    date_add: "2020-11-02T04:32:04.000Z",
  },
  {
    id_chat: 1,
    id_room: 2,
    message: "Halo kak",
    send_by: 2,
    type: "message",
    date_add: "2020-11-02T04:32:04.000Z",
  },
  {
    id_chat: 1,
    id_room: 2,
    message: "Halo kak",
    send_by: 2,
    type: "message",
    date_add: "2020-11-02T04:32:04.000Z",
  },
  {
    id_chat: 1,
    id_room: 2,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nesciunt ex, omnis voluptatem iure consectetur optio dolor nobis in culpa.",
    send_by: 1,
    type: "message",
    date_add: "2020-11-02T04:32:04.000Z",
  },
  {
    id_chat: 1,
    id_room: 2,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nesciunt ex, omnis voluptatem iure consectetur optio dolor nobis in culpa.",
    send_by: 1,
    type: "system",
    date_add: "2020-11-02T04:32:04.000Z",
  },
];

const Messages = () => {
  const me = getData("userData").id_customer;
  const containerRef = useRef();

  useEffect(() => {
    _scrollToBottom();
  }, [messagesData]);

  const _scrollToBottom = () => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  };

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
