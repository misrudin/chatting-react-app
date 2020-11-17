import React, { useEffect, useState, useCallback } from "react";
import { FiMessageSquare, FiArrowLeft } from "react-icons/fi";
import { ListOfPeople } from "../components";
import { getDataWaitingChat, getDataListChat, socket } from "../api";
import { useSelector } from "react-redux";

const List = () => {
  const [allData, setAllData] = useState(null);
  const [waiting, setWaiting] = useState(null);
  const [display, setDisplay] = useState("on");
  const [loading, setLoading] = useState(false);
  const {newChat} = useSelector(state => state.mainState)

  const getWaiting = useCallback(() => {
    setLoading(true)
    getDataWaitingChat()
      .then((res) => {
        setAllData(res.data.result);
        setWaiting(res.data.result);
        setLoading(false)
      })
      .catch((e) => {
        setLoading(false)
        console.log(e);
      });
  }, []);


  const getChatList = useCallback(() => {
    setLoading(true)
    getDataListChat()
      .then((res) => {
        setAllData(res.data.result);
        setLoading(false)
      })
      .catch((e) => {
        setLoading(false)
        console.log(e);
      });
  }, []);

  useEffect(() => {
    getDataWaitingChat()
      .then((res) => {
        setWaiting(res.data.result);
      })
      .catch((e) => {
        console.log(e);
      });
    getChatList();
    setDisplay("on");
  }, [getChatList, getWaiting]);

  // listen
  const sortPeole = (data) => {
    if (data) {
      let result = data.sort(function (a, b) {
        a = new Date(a.date_add);
        b = new Date(b.date_add);
        return b - a;
      });
      return result;
    }
  };
  useEffect(()=>{
  socket.on('new_message', (message)=>{
    // console.log(message);
    // console.log(allData && allData.filter(d=> d.id_room === message.id_room));
    let realtimeData = allData && allData.map(d=> {
      if (d.id_room === message.id_room) {
        let newData = {
          date_add: message.date_add,
          deleted: message.deleted,
          id_chat: message.id_chat,
          id_customer: message.id_customer,
          id_room: message.id_room,
          message: message.message,
          room_name: message.sender_name,
          room_photo: message.room_photo,
          status: d.status,
        }
        return newData
      }
      return d
    })
    
    setAllData(sortPeole(realtimeData))
    // console.log("data", data);
  });
  },[allData])


  useEffect(()=>{
    if(allData && newChat){
      let realtimeData =  allData.map(d=> {
        if (d.id_room === newChat.id_room) {
          let newData = {
            date_add: newChat.date_add,
            deleted: newChat.deleted,
            id_chat: newChat.id_chat,
            id_customer: newChat.id_customer,
            id_room: newChat.id_room,
            message: newChat.message,
            room_name: d.room_name,
            room_photo: d.room_photo,
            status: d.status,
          }
          return newData
        }
        return d
      })
      
      setAllData(sortPeole(realtimeData))
    }
  },[newChat])

  return (
    <div className="list">
      <div className="list-header">
        <h4 className="list-title">Chats</h4>
        <button
          className="btn btn-outline-light custom-btn"
          onClick={() => {
            if(!loading){
              if (display === "on") {
                getWaiting();
                setDisplay("waiting");
              } else {
                setDisplay("on");
                getChatList();
              }
            }
          }}
        >
          {display === "on" ? <FiMessageSquare /> : <FiArrowLeft />}
          {/* {loading && <div className="loader-button"></div>} */}

          {waiting && waiting.length > 0 && display === "on" && (
            <span className="badge badge-primary custom-badge">
              {waiting && waiting?.length > 9 ? "9+" : waiting.length}
            </span>
          )}
        </button>
      </div>
      {/* search */}
      <div className="spacer10"></div>
      <div className="spacer10"></div>
      <div className="spacer10"></div>
      <div className="list-search">
        <div className="form-group">
          <input
            type="text"
            className="form-control search"
            id="search-chat"
            name="search"
            autoComplete="off"
            placeholder={
              display === "on" ? "Search chats" : "Search waiting chats"
            }
          />
        </div>
      </div>

    <div className={`loading-container ${loading ? "show" : "hide"}`}>
      {loading && <div className="loader"></div>}
    </div>

      {/* recent */}
      { !loading ? allData && allData.length>0 ? (
        <div className="list-people">
          <ListOfPeople allData={allData} />
        </div>
      ) : (
        <p className="text-center text-muted message-error">
          Chats doesn't extist !
        </p>
      ) : null}
    </div>
  );
};

export default List;
