import React,{useEffect} from "react";
import { Header } from "../../templates";
import { Messages } from "../../components";
import "../../styles/pages.scss";
import { FiSmile, FiPaperclip, FiSend } from "react-icons/fi";
import { useSelector } from "react-redux";

import {getData} from '../../utils'
// import io from 'socket.io-client';
let baseUrl = process.env.REACT_APP_BASE_URL_LIVE;

const HomePage = () => {
  const {selectedUser} = useSelector(state => state.mainState)

  console.log(selectedUser)

  useEffect(()=>{
    var socket = require('socket.io-client')('http://192.168.8.102:3000');
    socket.on('connect', function(){
      console.log("ok");
    });
    socket.on('event', function(data){
      console.log(data);
    });
    socket.on('disconnect', function(){
      console.log("off");
    });

  },[])

  return (
    <div>
      <Header />
      <div className="main-content">
        <Messages />
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
              autoComplete="off"
              placeholder="Write a message..."
            />
          </div>
          <div className="spacer10"></div>
          <button className="btn btn-outline-light custom-btn">
            <FiPaperclip />
          </button>
          <div className="spacer10"></div>
          <div className="spacer10"></div>
          <button className="btn btn-primary">
            <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HomePage);
