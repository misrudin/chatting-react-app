import React, { useEffect, useState, useCallback } from "react";
import { FiMessageSquare, FiArrowLeft } from "react-icons/fi";
import { ListOfPeople } from "../components";
import { getDataWaitingChat, getDataListChat } from "../api";

const List = () => {
  const [allData, setAllData] = useState(null);
  const [waiting, setWaiting] = useState(null);
  const [display, setDisplay] = useState("on");
  const [loading, setLoading] = useState(false);

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
