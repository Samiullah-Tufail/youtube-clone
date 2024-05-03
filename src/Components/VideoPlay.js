import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingGif from "../loading-gif.gif";
import { Link } from "react-router-dom";
const VideoPlay = () => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState("none");
  const videoId = useParams();
  const relatedVideos = () => {
    setArticle([]);
    setLoading("block");
    const url = `https://youtube-v3-lite.p.rapidapi.com/search?relatedToVideoId=${videoId.id}&part=id%2Csnippet&type=video`;
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
    relatedVideos();
  }, [videoId.id]);
  const videourl = `https://www.youtube.com/embed/${videoId.id}`;
  return (
    <div className="flex flex-col justify-between items-center text-white mt-16 lg:flex-row ">
      <iframe
        className="fixed top-14 customborder-55 w-full h-64 sm:w-11/12 lg:ml-4 lg:w-1/2 sm:h-96"
        // width="560"
        height="315"
        src={videourl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="flex flex-col flex-wrap items-center w-11/12 mt-64 sm:flex-row sm:justify-evenly sm:mt-96 md:items-start lg:flex-col lg:ml-8 lg:mt-2 lg:w-5/12 lg:absolute right-0 top-16 ">
        <img
          className="mt-16 w-20 m-auto"
          src={LoadingGif}
          alt=""
          style={{ display: `${loading}` }}
        />
        {article.map((element) => (
          <div
            key={element.id.videoId}
            value={element.id}
            className="flex flex-col w-full text-white my-2 sm:w-5/12 sm:my-4  md:card-width-27 lg:w-11/12 lg:flex-row md:m-4"
          >
            <Link to={`/video/${element.id.videoId}`}>
              <img
                className="rounded-2xl max-w-none w-full lg:w-52 lg:h-full"
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
            </Link>
            <div>
              <p className="py-2 px-3">
                {element.snippet.title.length <= 77
                  ? element.snippet.title
                  : element.snippet.title.substring(0, 68) + "..."}
              </p>
              <p className="pb-2 px-3 text-gray-400">
                {element.snippet.channelTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlay;
