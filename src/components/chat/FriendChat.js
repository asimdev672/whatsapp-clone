import React from "react";
import { Link } from "react-router-dom";

const FriendChat = (props) => {
  return (
    <>
   
      <div className="FriendChat">
     <Link to={props.link}>
        <div className="d-flex justify-content-between  FriendChat__outerdiv">
          <div className="d-flex align-items-center "> 
            <img className="logo" src={props.img} alt="random" />
            <div className="d-flex flex-column justify-content-center  mt-3 ms-3">
              <h6 className="mb-0">{props.heading}</h6>
              <p className="msg">{props.msg}</p>
            </div>
          </div>
          <div className="mt-3 msg"> {props.lastSeen} </div>
        </div>
        </Link>
      </div>
      
    </>
  );
};

export default FriendChat;
