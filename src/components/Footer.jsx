import React from "react";
import "@styles/Footer.scss";
//components
import PrimaryButton from "./primary-button/PrimaryButton";
//assets
import facebook from "@icons/facebook.svg";
import instagram from "@icons/instagram.svg";
import whatsapp from "@icons/whatsapp.svg";
import twitter from "@icons/twitter.svg";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
          <ul className="list-unstyled">
            <li>
              <a href="">Product</a>
            </li>
            <li>
              <a href="">Benefits</a>
            </li>
            <li>
              <a href="">Partners</a>
            </li>
            <li>
              <a href="">Team</a>
            </li>
          </ul>
          <ul className="list-unstyled">
            <li>
              <a href="">Documentation</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
            <li>
              <a href="">Legal Terms</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </ul>
        <div className="contact-form">
          <h5 className="">Contact Us</h5>
          <form>
            <fieldset className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter email"
              />
            </fieldset>
            <fieldset className="form-group">
              <textarea 
                className="form-control"
                id="exampleMessage"
                placeholder="Message"
                rows="6" cols="30"
              ></textarea>
            </fieldset>
            <fieldset className="form-group"> 
              <PrimaryButton title={"Send"} classesAdded={""}></PrimaryButton>
            </fieldset>
          </form>
        </div>
      </div>
      <div className="footer-media-links">
          <ul className="nav">
            <li className="media-icon-link">
              <a href="" className="">
                <img src={facebook} alt="facebook" className="facebook" />
              </a>
            </li>
            <li className="media-icon-link">
              <a href="" className="">
              <img src={whatsapp} alt="whatsapp" className="whatsapp" />
              </a>
            </li>
            <li className="media-icon-link">
              <a href="" className="">
              <img src={instagram} alt="instagram" className="instagram" />
              </a>
            </li>
            <li className="media-icon-link">
              <a href="" className="">
              <img src={twitter} alt="twitter" className="twitter" />
              </a>
            </li>
          </ul>
      </div>
    </footer>
  );
};

export default Footer;
