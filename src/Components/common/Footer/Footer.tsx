import React from "react";
import "../Footer/Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
const Footer = () => {
  return (
    <div className="footer_con">
      <ul>
        <li>
          <a href="http://www.instagram.com">
            <InstagramIcon sx={{ color: "white" }} />
          </a>
        </li>
        <li>
          <a href="http://www.facebook.com">
            <FacebookOutlinedIcon sx={{ color: "white" }} />
          </a>
        </li>
        <li>
          <a href="http://www.twitter.com">
            <img
              src="https://icon-library.com/images/tweet-icon-png/tweet-icon-png-12.jpg"
              alt="twitter's icon"
            />
          </a>
        </li>
        <li>
          <a href="http://www.youtube.com">
            <img
              src="https://clipart-library.com/images/dc4LABqni.png"
              alt="youtube's icon"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
