import React, { useState, useEffect } from "react";
import LoadingGif from "../loading-gif.gif";
import { Link, useParams } from "react-router-dom";
const VideoSearchResult = () => {
  const userValue = useParams();
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState("none");
  const getdata = () => {
    setArticle([]);
    setLoading("block");
    const url = `https://youtube-v3-lite.p.rapidapi.com/search?q=${userValue.query}&part=id%2Csnippet`;
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
  }, [userValue.query]);

  return (
    <div className="w-full sm:mt-4">
      <img
        className="mt-32 w-20 m-auto"
        src={LoadingGif}
        alt=""
        style={{ display: `${loading}` }}
      />
      <div className="flex flex-wrap justify-center w-full mt-20">
        {article.map((element) => (
          <div
            key={element.id.videoId}
            value={element.id}
            className=" text-white w-full sm:w-2/5 md:card-width-27 m-4 "
          >
            <Link to={`/video/${element.id.videoId}`}>
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

export default VideoSearchResult;
