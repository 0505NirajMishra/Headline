import React from "react";
import "./CatFooter.css";
import { Link } from "react-router-dom";

const CatFooter = () => {
  return (
    <>
      <div className="extra-footer">
        <div className="footer-dark">
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-3 item"></div>
                <div className="col-sm-6 col-md-3 item">
                  <h3
                    style={{
                      marginTop: "10%"
                    }}
                  >
                    Headlines pvt.ltd
                  </h3>
                  <span
                    style={{
                      color: "white"
                    }}
                  >
                    @ Copyright 2022
                  </span>
                </div>
                <div className="col-md-6 item text">
                  <h3
                    style={{
                      marginTop: "5%"
                    }}
                  >
                    Contact us
                  </h3>

                  <Link
                    to="/privacy"
                    style={{
                      textDecoration: "none",
                      color: "white"
                    }}
                  >
                    Terms & Condition
                  </Link>
                  <br />
                  <Link
                    to="privacy"
                    style={{
                      textDecoration: "none",
                      color: "white"
                    }}
                  >
                    Privacy and Policy
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};
export default CatFooter;
