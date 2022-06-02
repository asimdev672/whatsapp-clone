import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosWifi } from "react-icons/io";
import { Link } from "react-router-dom";

const ShowStatus = () => {
  return (
    <>
      <div className="ShowStatus">
        <div className="d-flex">
          <div className="d-flex align-items-center">
         <Link to='/chat'> <BiArrowBack  className="fs-4"/></Link> 
            <img src="/img/Asim.jpg" className="showStatus_logo" alt="randm" />
          </div>
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ width: "100vw" }}
          >
            <div className="showStatus_info ms-4">
              <h4 className="mt-2">Muhammad Asim</h4>
              <p className="mb-0">Today 10:21 AM</p>
            </div>
            <div>
              <BsThreeDotsVertical className="fs-4" />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
        <video width="100%" height="fit-content" autoPlay unmuted loop>
          <source src="\img\bg video.mp4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        <div className="d-flex justify-content-center">
          <IoIosWifi className="fs-2" style={{ position: "fixed", bottom: "40px" }} />
          <small style={{ position: "fixed", bottom: "20px" }}>50</small>
        </div>
      </div>
    </>
  );
};

export default ShowStatus;
