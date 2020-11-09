import React from "react";
import moment from "moment";

const Message = ({ me, other, boot, content, time,onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`message ${me ? "me" : other ? "other" : boot ? "boot" : ""}`}
    >
      <p className="message-content">{content}</p>
      <p className="message-time">{moment(time).format("HH:mm A")}</p>
    </div>
  );
};

export default Message;
