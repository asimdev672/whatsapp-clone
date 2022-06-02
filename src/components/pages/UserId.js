import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { MdAccountCircle,MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
const UserId = () => {
  const year=new Date().getFullYear();
  return (
    <>
      <div className="UserId">
        <div className=" d-flex align-items-center heading">
          <Link to="/chat" className="ps-2">
            <BiArrowBack />
          </Link>
          <h4 className="ps-2 pt-3">Profile</h4>
        </div>
        <div className="d-flex justify-content-center mb-5 Account">
          <MdAccountCircle className="icon" />
        </div>

        <div className="d-flex information">
          <div>
            <FaUser />
          </div>
          <div className=" d-flex  ps-3 user--information ">
            <div className="user--info_border">
              <p className="mb-0 user--info_heading">Name</p>
              <p>
                This is not your username or pin.This name will be visible to
                your WhatsApp contacts.
              </p>
            </div>
            <div>
              <MdModeEdit className="edit--info" />
            </div>
          </div>
        </div>
        <div className="d-flex information">
          <div>
            <FaUser />
          </div>
          <div className=" d-flex  ps-3 user--information ">
            <div className="user--info_border">
              <p className="mb-0 user--info_heading">About</p>
              <p>
              Try ,try and try until you succeed. Good Luck for future.
              </p>
            </div>
            <div>
              <MdModeEdit className="edit--info" />
            </div>
          </div>
        </div>
        <div className="d-flex information">
          <div>
            <FaUser />
          </div>
          <div className=" d-flex  ps-3 user--information ">
            <div>
              <p className="mb-0 user--info_heading">Contact</p>
              <p>
              +92 307********
              </p>
            </div>
            
          </div>
        </div>
        <div className="footer">
          <p className="text-center">Created by Muhammad Asim || All Right Reserverd ©️ {year}</p>
        </div>
      </div>
     
    </>
  );
};

export default UserId;
