import React from "react";
import { NavLink } from "react-router-dom";
const getClass = ({ isActive }) => (isActive ? "text-blue-900 text-2xl" : "");

const Navbar = () => {
  return (
    <nav>
      <div className="w-full fixed  mx-auto  bg-gradient-to-r from-amber-300 to-red-200">
        <div className="flex h-16 w-[90%] px-10 justify-between items-center">
          <div className="uppercase text-4xl ">Logo</div>
          <div className="flex gap-4 uppercase ">
            <NavLink to={"/"} className={getClass}>
              Home
            </NavLink>{" "}
            <NavLink to={"/movies"} className={getClass}>
              Movies
            </NavLink>
            <NavLink to={"/about"} className={getClass}>
              About
            </NavLink>
            <NavLink to={"/fetch_old"} className={getClass}>
              Fetch_Old
            </NavLink>
            <NavLink to={"/fetch_react_query"} className={getClass}>
              Fetch_React_Query
            </NavLink>
            <NavLink to={"/fetch_useQueryInLoader"} className={getClass}>
              use_Query_In_Loader
            </NavLink>
            <NavLink to={"/fetch_useSuspenseQuery"} className={getClass}>
              use_Suspense_Query
            </NavLink>
            <NavLink
              to={"/fetch_useSuspenseQueryInLoader"}
              className={getClass}
            >
              use_Suspense_In_Loader
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
