import React from "react";
import "./footer.styles.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer-content">
      <h3>Jam Pack Records</h3>
      <p>Developed by Anasemos Kassahun</p>
      <ul className="socials">
        <li>
          <a href="https://github.com/anasemo234">
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/anasemos-kassahun/">
            <AiFillLinkedin />
          </a>
        </li>
      </ul>
      <div className="footer-bottom">
        <p>
          copyright &copy;2022 <a href="#">Jam Pack Records</a> All rights
          reserved.{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
