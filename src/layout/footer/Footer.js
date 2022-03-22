import React from "react";
import "./footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  
  return (
    <>
      <footer className="page-footer teals">
        <div className="container">
          <div
            className="row"
            style={{
              marginBottom: 0,
              paddingBottom: 15
            }}
          >
            <div className="col m4 l3 s6 footer-left-pane">
              <div className="copy-text">
                <span
                  className="spaninshort"
                  style={{
                    color: "#cfcfcf",
                    fontFamily: "Conv_ClanPro-Bold",
                    marginLeft: "18%",
                    fontSize:'150%'
                  }}
                >
                  Headlines
                </span>
                <small
                  className="text1"
                  style={{
                    color: "white",
                    fontSize:'150%'
                  }}
                >
                  &nbsp;pvt.ltd
                </small>
                <br />
                <span
                  className="text2"
                  style={{
                    color: "white",
                    marginLeft:'18%'
                  }}
                >
                  {" "}
                  © Copyright 2022
                </span>
                <span style={{ fontSize: 12, color: "white"}}>
                  {/* Copyright 2022 */}
                </span>
              </div>
            </div>
            <div className="col m4 l3 s6 footer-right-pane">
              <div
                id="contactUsBtn"
                className="left clickable"
                style={{ 
                  marginTop: "-3px" , 
                  color:'white' ,
                  marginLeft:'3%',
                  fontSize:'150%'
              }}
              >
              Contact Us
              </div>
              <div className="terms-text" style={{
                fontSize:'80%'
              }}>
                <Link
                  className="tnc"
                  style={{ color: "#fff", textDecoration: "none" }}
                  to="/privacy"
                >
                  <span>Terms &amp; Conditions</span>
                  <br />
                  <span>Privacy Policies</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
};
export default Footer;