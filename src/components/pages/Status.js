import React from "react";
import Header from "../chat/Header";
import { Link } from "react-router-dom";
import { BsCameraFill } from "react-icons/bs";
const Status = () => {
  return (
    <>
      <Header />
      <div className="Status container-fluid px-0">
        <div className="container-fluid mt-3 align-items-center d-flex">
          <div className="me-lg-5 me-4">
            <img src="./img/Asim.jpg" className="status_img " alt="random" />
          </div>
          <div className="status_info">
            <h4>My status</h4>
            <p>tap to add status update</p>
          </div>
        </div>
        <div className="border status__breakline mt-2 mb-4">
          <small>Recent update</small>
        </div>
        {/* status show  */}
        <a href="">
          <div className="container-fluid  align-items-center d-flex   mb-3">
            <div>
              <img
                src="./img/Asim.jpg"
                className="status_body_img me-lg-5 me-4"
                alt="random"
              />
            </div>
            <div className="status_info  ">
              <h4>Muhammad Asim</h4>
              <p>Now</p>
            </div>
          </div>
        </a>
        <a href="">
          <div className="container-fluid  align-items-center d-flex mb-3">
            <div>
              <img
                src="./img/jawad.png"
                className="status_body_img me-lg-5 me-4"
                alt="random"
              />
            </div>
            <div className="status_info ">
              <h4>Muhammad Jawad</h4>
              <p>Yesterday,3:09 PM</p>
            </div>
          </div>
        </a>
        <a href="">
          <div className="container-fluid  align-items-center d-flex mb-3">
            <div>
              <img
                src="./img/qadeer.png"
                className="status_body_img me-lg-5 me-4"
                alt="random"
              />
            </div>
            <div className="status_info ">
              <h4>Abdull Qadeer</h4>
              <p>Today,12:09 PM</p>
            </div>
          </div>
        </a>
        <a href="">
          <div className="container-fluid  align-items-center d-flex mb-3">
            <div>
              <img
                src="./img/haseeb.png"
                className="status_body_img me-lg-5 me-4"
                alt="random"
              />
            </div>
            <div className="status_info ">
              <h4>Muhammad Haseeb</h4>
              <p>Friday,1:09 AM</p>
            </div>
          </div>
        </a>
        <a href="">
          <div className="container-fluid  align-items-center d-flex mb-3">
            <div>
              <img
                src="./img/sodager.png"
                className="status_body_img me-lg-5 me-4"
                alt="random"
              />
            </div>
            <div className="status_info ">
              <h4>Sodager Ali</h4>
              <p>Sunday,3:00 PM</p>
            </div>
          </div>
        </a>
        <a href="">
          <div className="container-fluid  align-items-center d-flex mb-3">
            <div>
              <img
                src="./img/afaq.png"
                className="status_body_img me-lg-5 me-4"
                alt="random"
              />
            </div>
            <div className="status_info ">
              <h4>Muhammad Afaq</h4>
              <p>Monday,3:40 PM</p>
            </div>
          </div>
        </a>
        <a href="">
          <div className="container-fluid  align-items-center d-flex mb-3">
            <div>
              <img
                src="./img/ali.jpeg"
                className="status_body_img me-lg-5 me-4"
                alt="random"
              />
            </div>
            <div className="status_info ">
              <h4>Ali Ismail</h4>
              <p>Monday,5:40 PM</p>
            </div>
          </div>
        </a>
        <a href="">
          <div className="container-fluid  align-items-center d-flex mb-3">
            <div>
              <img
                src="./img/ahmed.png"
                className="status_body_img me-lg-5 me-4"
                alt="random"
              />
            </div>
            <div className="status_info ">
              <h4>Ahmed Ali</h4>
              <p>Thursday,8:40 PM</p>
            </div>
          </div>
        </a>
        <div>
        <button>
        <Link to=""> <BsCameraFill/></Link>
        </button>
        </div>
      </div>
    </>
  );
};

export default Status;
