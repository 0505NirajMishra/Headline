import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IconContext } from "react-icons";
import Categories from "../cardinfo/Categories";
import CatFooter from '../../layout/footer/CatFooter';

function CatNavbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const [data, setdata] = useState([]);

  const getapi = () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch(`https://theheadlines.co.in/admin/api/blog-category-list`, options)
      .then((res) => res.json())
      .then((resp) => {
        setdata(resp.data);
      })
      .catch((error) => {
        console.log("Error is =>" + error);
      });
  };

  useEffect(() => {
    getapi();
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

          <div
            style={{
              marginTop: "-0.5%",
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              flexDirection: "row",
              boxShadow: "5px 10px #black"
            }}
          >
            <h6
              style={{
                color: "white",
                fontSize: "130%"
              }}
            >
              <span>Headlines</span>
            </h6>
          </div>
        </div>
        <Categories />
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {data.map((item, index) => {
              return (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    padding: "8px 0px 8px 16px",
                    listStyle: "none",
                    height: "60px"
                  }}
                >
                  <Link
                    to={`/categories/${item.id}`}
                    style={{
                      textDecorationLine: "none"
                    }}
                  >
                    <img src={item.image}  style={{
                      width:'15%'
                    }} alt="image not band"/>

                    <span
                      style={{
                        color: "white"
                      }}
                    >
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
export default CatNavbar;