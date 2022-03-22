import React, { useState, useEffect } from "react";
import Footer from "../../layout/footer/Footer";
import ReactHtmlParser from "react-html-parser";

import { useParams } from "react-router-dom";

const Card = () => {
  
  const [data, setdata] = useState([]);

  const [page, setpage] = useState(5);

  const [isloading, setisloading] = useState([]);

  const loadmore = () => {
    setpage(page + page);
  };

  const getcard = () => {
    setisloading(true);

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch(`https://theheadlines.co.in/admin/api/blog-list`, options)
      .then((res) => res.json())
      .then((resp) => {
        setdata(resp.data);
      })
      .catch((error) => {
        console.log("Error is =>" + error);
      })
      .finally(() => {
        setisloading(false);
      });
  };


  useEffect(() => {
    getcard();
  }, []);

  const slice = data.slice(0, page);

  return (
    <>
      {slice.map((item) => (
        <>
          <div className="card-deck mt-5">
            <div
              className="card"
              style={{
                maxWidth: "55%",
                marginLeft: "25%",
                justifyContent: "center"
              }}
            >
              <div className="row">
                <div className="col-md-6">
                  <img
                    className="card-img-top"
                    style={{
                      padding: "3%"
                    }}
                    src={item.banner_image}
                    alt="Card image cap"
                  />
                </div>

                <div className="col-md-6 mt-3">
                  <div
                    className="card-block"
                    style={{
                      padding: "3%"
                    }}
                  >
                    <h4
                      className="card-title"
                      style={{
                        fontSize: "100%"
                      }}
                    >
                      <b>{item.title}</b>
                    </h4>

                    <p
                      className="card-text"
                      style={{
                        marginTop: "6%",
                        fontFamily: "Georgia, serif",
                        fontSize: "80%",
                        fontWeight: "600"
                      }}
                    >
                      {ReactHtmlParser(item.description)}
                    </p>
                  </div>
                  <div
                    style={{
                      margin: "2%",
                      fontSize: "125%",
                      marginLeft: "-0.2%"
                    }}
                  >
                    <a
                      href={item.url}
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "70%",
                        marginLeft: "4%"
                      }}
                      target={"_blank"}
                    >
                      Read More......
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </>
      ))}

      <div
        className="load-more"
        style={{
          marginTop: "2%",
          marginBottom: "2%",
          marginLeft: "5%",
          textAlign: "center"
        }}
      >
        <button
          onClick={loadmore}
          className="btn btn-light"
          style={{
            backgroundColor: "white",
            color: "black"
          }}
        >
          <span
            style={{
              fontSize: "120%"
            }}
          >
            {isloading ? "Loading..." : "Load More"}
          </span>
        </button>
      </div>
      <br />
      <Footer />
    </>
  );
};
export default Card;