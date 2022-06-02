import React from 'react'
import { MdPhoneCallback } from "react-icons/md";
const CommonCall = (props) => {
  return (
    <>
    
       <div className="container-fluid align-items-center border-bottom d-flex pb-3 mb-3">
          <div> 
              <img
                src={props.img}
                className="call_img"
                alt="random"
              />
          </div>
          <div
            className="d-flex justify-content-between "
            style={{ width: "100vw" }}
          >
            <div className="ms-lg-5 ms-3">
              <h6 className="mb-0">{props.name}</h6>
              {props.icon }
              <small>{props.small}</small>
            </div>
            <div>
              <MdPhoneCallback className="fs-4 mt-3" />
            </div>
          </div>
        </div>
    </>
  )
}

export default CommonCall
