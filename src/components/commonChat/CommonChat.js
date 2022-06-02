import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { MdCall } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { AiOutlineCamera } from "react-icons/ai";
import {
  BsThreeDotsVertical,
  BsEmojiSmile,
  BsFillMicFill,
} from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";
import { IoSendSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const CommonChat = (props) => {
  const [msg, setMsg] = useState("");
  const [item, setItem] = useState([]);
  console.log(item);
  const date = new Date().toLocaleTimeString();
  console.log(date);
  const inputVal = (e) => {
    setMsg(e.target.value);
  };
  const sendMessage = () => {
    if (msg === "") {
    } else {
      setItem([...item, msg]);
    }
    setMsg(" ");
  };
  return (
    <>
      <div className="CommonChat">
        <div className="CommonChat--header">
          <div className="container-fluid px-0 d-flex  ">
            <div className="d-flex align-items-center">
             <Link to='/chat'> <BiArrowBack className="backword-arrow" /></Link>
              <img
                src={props.img}
                className=" ms-lg-3 image--icon"
                alt=""
              />
            </div>
            <div className="d-flex justify-content-between header--center_div">
              <div className="ms-lg-5 ms-2">
                <h5>{props.name}</h5>
                <small>{props.status}</small>
              </div>
              <div className="d-flex">
                <div className="px-lg-5 px-2 fs-5">
                  <FaVideo />
                </div>
                <div className="px-lg-5 px-2 fs-5">
                  <MdCall />
                </div>
                <div className="px-lg-5 px-2 fs-5">
                  <BsThreeDotsVertical />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------Message_Show */}
        <div className="Message_Show">
          <div className="d-flex flex-column-reverse align-items-end">
            <div>
              <textarea name="" id="" cols="20" rows="3">
                How are you😃.
              </textarea>
            </div>
            <div>
              <textarea name="" id="" cols="20" rows="3">
                Welcome To Asim WhatsApp
              </textarea>
            </div>
          </div>
          {item.map((val) => {
            return (
              <>
                <div className="Real_time_chat">
                <p>{val} <small>{date}</small></p>
                  {/* <p></p>  */}
                  {/* <textarea contenteditable="false" cols="" rows="">
                  {val}
                  11:55:30
                  </textarea> */}
                </div>
              </>
            );
          })}
        {/* </div> */}
        <div className="d-flex Message_input_main">
          <BsEmojiSmile className="Message_input_icon_A" />
          <input
            type="text"
            placeholder="Type a message"
            value={msg}
            onChange={inputVal}
          />
          <AiOutlineCamera className="Message_input_icon_B" />
          <MdAttachFile className="Message_input_icon_C" />
          <div className="Mic_div">
            {msg.length > 0 ? (
              <IoSendSharp onClick={sendMessage} />
            ) : (
              <BsFillMicFill />
            )}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default CommonChat;
