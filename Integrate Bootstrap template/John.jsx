import React from 'react';
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
// Custom CSS for additional styling

function John() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
          <h1>Hi, Hi, I'm John Deo.</h1>
          <p>A freelance web developer from India. I convert custom web designs to Bootstrap templates.</p>
          <p>I make YouTube videos and write blogs.</p>
          <button className="btn btn-primary mb-3">I'm Available</button>
          <div>
            <ImFacebook className="logo mx-2" />
            <FaTwitter className="logo mx-2" />
            <AiFillInstagram className="logo mx-2" />
            <FaGithub className="logo mx-2" />
          </div>
        </div>
        <div className="col-lg-6 text-center">
          <img className="img-fluid rounded-circle" style={{width:"50px"}} src="image/png.png" alt="John Deo" />
        </div>
      </div>
    </div>
  );
}

export default John;
