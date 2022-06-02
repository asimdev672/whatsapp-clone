import React, { useState } from "react";
import { BsEmojiLaughing } from 'react-icons/bs';
import { MdAddAPhoto } from 'react-icons/md';
import { Link } from "react-router-dom";
const Login = () => {
  const [val, setVal] = useState("");
  console.log(val.length);
  const inputValue = (e) => {
    setVal(e.target.value);
  };
  return (
    <>
      <div className="Login">
        <p className="text-center my-4 py-2 Login__heading">Profile info</p>
        <div className="">
          <p className="text-center">
            Please Provide your name and an optional profile photo
          </p>
        </div>
        <div className="text-center pt-4">
          <div className="AddAPhotoIcon_outer_div">
            <MdAddAPhoto className="icon"/>
          </div>
        </div>
        <div className="text-center mt-5">
          <input
            type="text"
            placeholder="Type Your Name Here"
            onChange={inputValue}
          />
         <BsEmojiLaughing className="emoji__icon"/>
        </div>
        <div className=" text-center ">
          {val.length > 0 ? (
           <Link to='/chat'><button className="Login__btn ">click me</button></Link> 
          ) : (
            <button disabled className="btn btn-secondary ">
              click me
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
