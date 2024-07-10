import './App.css';
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

function Card() {
  return (
    <div className="container">
      <div className="row align-items-center card-container">
        <div className="col-12 col-md-6 card-content">
          <h1>Hi, I'm Jeel Patel.</h1>
          <p>A FREELANCER WEB DEVELOPER FROM INDIA. I CONVERT CUSTOM <br /> WEB DESIGNS TO BOOTSTRAP TEMPLATES.</p>
          <p>I MAKE YOUTUBE VIDEOS AND WRITE BLOGS.</p>
          <button className="btn btn-primary mb-3">I'M AVAILABLE</button><br />
          <div>
            <ImFacebook style={{margin:"10px"}} className="logo" />
            <FaTwitter style={{margin:"10px"}} className="logo" />
            <AiFillInstagram style={{margin:"10px"}} className="logo" />
            <FaGithub style={{margin:"10px"}} className="logo" />
          </div>
        </div>
        <div className="col-12 col-md-6 card-image text-center">
          <img
            src="image/png.png"
            alt="Programming Illustration"
            className="img-fluid"
            width={700}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
