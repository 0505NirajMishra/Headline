import React from "react";

import picture from "../../component/images/HeadlineLogo.jpg";

const Header = () => {
  return (
    <div
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "#323232",
        padding: "1%"
      }}
    >
      <div className="container-fluid">
        {/* <img
          src={picture}
          style={{
            width: "55px",
            height: "40px"
          }}
          alt=""
        /> */}
        <h1
          style={{
            marginTop:'0.5%',
            marginLeft: "3%",
            color: "white",
            fontSize: "150%",
            fontFamily: "sans-serif",
            fontWeight: "500%"
          }}
        >
          Headlines
        </h1>
      </div>
    </div>
  );
};

export default Header;

{
  /* <div className="collapse navbar-collapse " id="navbarCollapse">
          <div className="navbar-nav text-left">
            <a href="#" className="nav-item nav-link active">
              Home
            </a>
            <a href="#" className="nav-item nav-link active">
              Profile
            </a>
            <a href="#" className="nav-item nav-link active">
              Messages
            </a>
            <a href="#" className="nav-item nav-link active" tabindex="-1">
              Reports
            </a>
          </div> */
}
{
  /* <div className="navbar-nav ms-auto">
            <a href="#" className="nav-item nav-link">
              Login
            </a>
          </div> */
}
{
  /* </div> */
}