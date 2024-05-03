import React, { useState, useContext } from "react";
import Youtubelogo from "./youtube-logo.png";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const userValue = (e) => {
    setValue(e.target.value);
  };
  const keyPressed = (e) => {
    if (e.charCode === 13) {
      navigate(`/search/${value}`);
    }
  };
  return (
    <div className="pt-1 bg-body flex justify-between items-center fixed top-0 w-full z-10 sm:pt-0">
      <Link to="/">
        <img className="w-24 sm:w-32" src={Youtubelogo} alt="" />
      </Link>
      <div className="w-64 mr-2 flex sm:w-2/6 sm:mr-32">
        <input
          className="px-2  sm:py-2 sm:px-4 w-full rounded-3xl rounded-r-none outline-none"
          type="search"
          name=""
          id=""
          placeholder="Search"
          onChange={userValue}
          onKeyPress={keyPressed}
        />
        <Link to={`/search/${value}`}>
          <button className="text-white font-bold bg-red-color py-2 px-1.5 rounded-r-3xl">
            Search
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
