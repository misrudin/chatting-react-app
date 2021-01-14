import React from "react";
import moment from "moment";
import {FaReply} from 'react-icons/fa'
import {Tooltip, OverlayTrigger} from 'react-bootstrap'
// import {noUserImage} from '../../assets'/

const Message = React.forwardRef((props,ref) => {
  const { me, other, boot, content, time, onClick,onReply ,id,extra} = props

  const handleClick=(data)=>{
    if (data){
      onClick(data)
    }
  }
return (
    <div ref={ref} className={`container-chat-message ${me ? "me" : other ? "other" : boot ? "boot" : "" }`}>
      <div onClick={()=> handleClick(extra)} className={`message ${me ? "me" : other ? "other" : boot ? "boot" : "" }`}>
        {extra && 
        <div className="extra">
        {
          extra.type === "product"  && 
          <div className="with-image">
          <img className="img-product" src={extra?.product_image} alt="Product"/>
        </div>
        }
        <div className="only-text">
      <h5 className="your-name">{extra?.sender_name || extra?.product_title}</h5>
      <p className="content">{extra?.message || extra?.product_price}</p>
        </div>
      </div>
        }
        <p className="message-content">{content}</p>
        <p className="message-time">{time}</p>
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
)})

export default React.memo(Message);
