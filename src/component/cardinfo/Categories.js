import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
// import CatFooter from '../../layout/footer/CatFooter';
import Footer from "../../layout/footer/Footer";

const Categories = () => {

  const { id } = useParams();

  const [page, setpage] = useState(5);

  const [isloading, setisloading] = useState([]);

  const [data, setdata] = useState([]);

  const getapi = () => {
    setisloading(true);
    fetch(`https://theheadlines.co.in/admin/api/blog-category-list/?id=${id}`)
      .then((res) => res.json())
      .then((res) => {
        setdata(res.data);
      })
      .catch((error) => {
        console.log("Error is =>" + error);
      })
      .finally(() => {
        setisloading(false);
      });
  };

  useEffect(() => {
    getapi();
  }, []);

  const loadmore = () => {
    setpage((prevValue) => prevValue + 5 )
  };


  return (
    <>
      {data
        .filter((item) => item.id == id)
        .map((item) =>
          item.blog.slice(0,page).map((demoblog, index) => {
            return (
              <>
                <div className="card-deck mt-5" key={index}>
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
                          src={demoblog.banner_image}
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
                            <b>{demoblog.title}</b>
                          </h4>
                          <p
                            className="card-text"
                            style={{
                              marginTop: "6%",
                              fontFamily: "Georgia, serif",
                              fontSize: "70%",
                              fontWeight: "600"
                            }}
                          >
                            {ReactHtmlParser(demoblog.description)}
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
                            href={demoblog.url}
                            style={{
                              textDecoration: "none",
                              color: "black",
                              fontSize: "70%",
                              marginLeft: "3%"
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
            
                {/* {demoblog.ads_show == 1 ? (
                  <>
                        <div style={{
                            justifyContent:'center',
                            alignItems:'center',
                            marginLeft:'50%'
                        }}>
                              <img src={demoblog.ads_data.image} style={{
                                width:'15%'
                              }}/>
                        </div>
                  </>
                ) : (
                  ""
                )} */}
              </>
            );
          })
        )}
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
      <br/>
      <br/>
      {/* <br/> */}
      <>
        <Footer />
      </>
    </>
  );
};
export default Categories;