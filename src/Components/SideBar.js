import React from "react";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="mt-12 flex w-full sm:w-52 sm:px-8 border-0 sm:border-r-2 sm:mt-20 border-gray-700 bg-body fixed">
      <ul className=" flex w-full overflow-x-scroll sm:overflow-x-visible hide-scrollbar sm:block">
        <NavLink className="sm:font-semibold" to={`/`}>
          <li className="mx-2 sm:mx-0 sidebar-li iconhover category-bg sm:bg-transparent">
            <i className="fa-solid fa-house mr-3 red-color"></i>
            Home
          </li>
        </NavLink>
        <NavLink className="sm:font-semibold" to={`/sports`}>
          <li className="mx-2 sm:mx-0 sidebar-li iconhover category-bg sm:bg-transparent">
            <i className="fa-solid fa-baseball mr-3 red-color w-4"></i>
            Sports
          </li>
        </NavLink>
        <NavLink className="sm:font-semibold" to={`/coding`}>
          <li className="mx-2 sm:mx-0 sidebar-li iconhover category-bg sm:bg-transparent">
            <i className="fa-solid fa-code mr-3 red-color w-4"></i>
            Coding
          </li>
        </NavLink>
        <NavLink className="sm:font-semibold" to={`/music`}>
          <li className="mx-2 sm:mx-0 sidebar-li iconhover category-bg sm:bg-transparent">
            <i className="fa-solid fa-music mr-3 red-color w-4"></i>
            Music
          </li>
        </NavLink>
        <NavLink className="sm:font-semibold" to={`/education`}>
          <li className="mx-2 sm:mx-0 sidebar-li iconhover category-bg sm:bg-transparent">
            <i className="fa-solid fa-graduation-cap mr-3 red-color w-4"></i>
            Education
          </li>
        </NavLink>
        <NavLink className="sm:font-semibold" to={`/technology`}>
          <li className="mx-2 sm:mx-0 sidebar-li iconhover category-bg sm:bg-transparent">
            <i className="fa-solid fa-microchip mr-3 red-color w-4"></i>
            Technology
          </li>
        </NavLink>
        <NavLink className="sm:font-semibold" to={`/podcast`}>
          <li className="mx-2 sm:mx-0 sidebar-li iconhover category-bg sm:bg-transparent">
            <i className="fa-solid fa-podcast mr-3 red-color w-4"></i>
            Podcast
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default SideBar;
