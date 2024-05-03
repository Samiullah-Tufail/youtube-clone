import React, { useState, useEffect } from "react";
import LoadingGif from "../loading-gif.gif";
const useFetch = (url) => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState("none");
  useEffect(() => {
    // const useFetch = () => {
    //     const url =
    //     "https://youtube-v3-lite.p.rapidapi.com/videos?chart=mostPopular&regionCode=PK&part=id%2Csnippet";
    const getData = () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "3b4e9a689dmshb59790cb96f61eap1f28a8jsn919344c6a2df",
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
    getData();
  }, []);
  return [article, loading];
};

export default useFetch;
