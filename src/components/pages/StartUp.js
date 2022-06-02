import React from "react";
import { Link } from "react-router-dom";

const StartUp = () => {
  return (
    <>
      <div className="StartUp">
        <div className="container-fluid">
          <h3 className="text-center my-3 pt-4">Welcome to WhatsApp</h3>
          <div className="container text-center ">
            <img
              src="./img/startup_logo.jpg"
              className="py-4 start_log"
              alt=""
            />
          </div>
          <div className="container text-center">
            <p className=" py-3">
              Read our <a href="">Privacy Policy.</a>Tap "Agree and continue" to
              accept the <a href="">Terms of Service</a>.
            </p>
            <Link to="/login">
              <button className="StartUp__btn mt-3">AGREE AND CONTINUE</button>
            </Link>
          </div>
          <div className="container text-center my-4">
            From
            <p className="StartUp__last__p">FACEBOOK</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartUp;
