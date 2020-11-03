import React from "react";

const People = ({ data }) => {
  return (
    <div className="people">
      <img
        src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
        className="people-img"
        alt="people-img"
      />
      <div className="people-detail">
        <p className="people-detail-name">{data.name}</p>
        <p className="people-detail-chat">{data.last_content}</p>
      </div>
      <div className="people-chat-time">
        <span className="badge badge-primary custom-badge">{data.badge}</span>
        <p className="chat-time">{data.last_time}</p>
      </div>
    </div>
  );
};

export default People;
