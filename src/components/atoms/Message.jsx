import React from "react";
import moment from "moment";
import {FaReply} from 'react-icons/fa'
import {Tooltip, OverlayTrigger} from 'react-bootstrap'
import {noUserImage} from '../../assets'

const Message = ({ me, other, boot, content, time, onClick,onReply ,id,extra}) => {
return (
    <div className={`container-chat-message ${me ? "me" : other ? "other" : boot ? "boot" : "" }`}>
      <div onClick={onClick} className={`message ${me ? "me" : other ? "other" : boot ? "boot" : "" }`}>
        {extra && 
        <div className="extra">
        {
          extra.type === "product"  && 
          <div className="with-image">
          <img className="img-product" src={noUserImage} alt="Product"/>
        </div>
        }
        <div className="only-text">
      <h5 className="your-name">{extra?.sender_name || extra?.product_title}</h5>
      <p className="content">{extra?.message || extra?.product_price}</p>
        </div>
      </div>
        }
        <p className="message-content">{content}</p>
        <p className="message-time">{moment(time).format("HH:mm A")}</p>
      </div>
      <div className="action-button-messages" onClick={()=>onReply()}>
        <OverlayTrigger
        key={id}
        placement="top"
        overlay={
          <Tooltip id={`tooltip-top-${id}`}>
            Reply
          </Tooltip>
        }
        >
            <FaReply id={`icon-${id}`} onClick={()=>onReply()} className="custom-btn-reply" />
        </OverlayTrigger>
      </div>
    </div>
)};

export default React.memo(Message);
