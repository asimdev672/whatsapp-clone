import React from "react";
import { BiSearch } from "react-icons/bi";
import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  
  return (
    <>
      <div className="Header">
        <div className="d-flex  justify-content-between">
          <div className=''>Whatsapp</div>
          <div>
            <BiSearch className="search_icon" />
           <Link to='/userid'> <RiAccountCircleFill className="accout_icon" /></Link>
          </div>
        </div>
       
      </div>
      <div className=" Header--B d-flex ">
       
       <Link to="/chat" >CHATS</Link>
       <Link to="/status">STATUS</Link>
       <Link to="/calls/history">CALLS</Link>
     </div>
    </>
  );
};

export default Header;
