import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import LoadingGif from "../loading-gif.gif";
import { Link } from "react-router-dom";
const Home = () => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState("none");
  const getdata = () => {
    setArticle([]);
    setLoading("block");
    const url =
      "https://youtube-v3-lite.p.rapidapi.com/videos?chart=mostPopular&regionCode=PK&part=id%2Csnippet";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "3b4e9a689dmshb59790cb96f61eap1f28a8jsn919344c6a2df",
        "X-RapidAPI-Host": "youtube-v3-lite.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading("none");
        setArticle(data.items);
      });
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="flex flex-col sm:flex-row">
      <SideBar />

      <div className="ml-0 justify-center sm:ml-52 flex flex-wrap w-full mt-20">
        <img
          className="mt-48 sm:mt-16 w-20 m-auto"
          src={LoadingGif}
          alt=""
          style={{ display: `${loading}` }}
        />
        {article.map((element) => (
          <div
            key={element.id}
            value={element.id}
            className="w-full text-white m-4 sm:card-width lg:w-1/4"
          >
            <Link to={`video/${element.id}`}>
              <img
                className="rounded-2xl w-full h-44"
                src={
                  element.snippet.thumbnails.medium
                    ? element.snippet.thumbnails.medium.url
                        .replace(" =>", ":")
                        .trim()
                    : element.snippet.thumbnails.default.url
                        .replace(" =>", ":")
                        .trim()
                }
                alt=""
              />
              <p className="py-2 px-3">
                {element.snippet.title.length <= 77
                  ? element.snippet.title
                  : element.snippet.title.substring(0, 68) + "..."}
              </p>
            </Link>
            <p className="pb-2 px-3 text-gray-400">
              {element.snippet.channelTitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
