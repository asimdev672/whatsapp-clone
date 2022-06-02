import React from "react";
import CommonCall from "./CommonCall";
import { Link } from "react-router-dom";
import {BsCameraFill} from 'react-icons/bs';
import { MdCallMade,MdCallReceived ,MdAddCall} from "react-icons/md";
import Header from "../chat/Header";

const Calls = () => {
  return (
    <>
    <Header/>
      <div className="Calls">
      <CommonCall
          img="/img/ali.jpeg"
          name="Ali Ismail"
          small="Today,11:21PM"
          icon={
            <MdCallMade
              className="fs-4"
              style={{ color: "rgb(37, 211, 102)" }}
            />
          }
        />
        <CommonCall
          img="/img/afaq.png"
          name="Muhammad Afaq"
          small="Today,10:21AM"
          icon={
            <MdCallMade
              className="fs-4"
              style={{ color: "rgb(37, 211, 102)" }}
            />
          }
        />
        <CommonCall
          img="/img/qadeer.png"
          name="Abdull Qadeer"
          small="Today,11:21PM"
          icon={
            <MdCallReceived
              className="fs-4"
              style={{ color: "red" }}
            />
          }
        />
        <CommonCall
          img="/img/jawad.png"
          name="Muhammad Jawad"
          small="Today,1:21AM"
          icon={
            <MdCallMade
              className="fs-4"
              style={{ color: "rgb(37, 211, 102)" }}
            />
          }
        />
        <CommonCall
          img="/img/sodager.png"
          name="Sodager Ali"
          small="Today,12:01PM"
          icon={
            <MdCallReceived
              className="fs-4"
              style={{ color: "red" }}
            />
          }
        />
        <CommonCall
          img="/img/haseeb.png"
          name="Muhammad haseeb"
          small="Today,03:21PM"
          icon={
            <MdCallMade
              className="fs-4"
              style={{ color: "rgb(37, 211, 102)" }}
            />
          }
        />
        <CommonCall
          img="/img/qadeer.png"
          name="Abdull Qadeer"
          small="Today,11:21AM"
          icon={
            <MdCallReceived
              className="fs-4"
              style={{ color: "red" }}
            />
          }
        />
        <CommonCall
          img="/img/ahmed.png"
          name="Ahmed Ali"
          small="Friday,11:21AM"
          icon={
            <MdCallReceived
              className="fs-4"
              style={{ color: "red" }}
            />
          }
        />
      
      <div>
        <button>
        <Link to=""> <MdAddCall style={{color:'#075e54'}}/></Link>
        </button>
        </div>
      </div>
    </>
  );
};

export default Calls;
