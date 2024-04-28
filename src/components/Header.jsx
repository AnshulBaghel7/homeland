import React from "react";
import logo from "../assests/img/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-[10vh] w-full ">
      <div>
        <Link to="/">
          <img src={logo} className="h-10 w-auto" />
        </Link>
      </div>
      <div>
        <ul className="flex justify-between items-center gap-5">
          <Link
            className="text-lg hover:text-violet-900 transition"
            to="/login"
          >
            Home
          </Link>
          <Link
            className="text-lg hover:text-violet-900 transition"
            to="/login"
          >
            About
          </Link>
          <Link
            className="text-lg hover:text-violet-900 transition"
            to="/login"
          >
            Contact
          </Link>
          <div className="flex justify-between items-center gap-2">
            <Link
              className="text-lg bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
              to="/login"
            >
              Log in
            </Link>
            <Link
              className="text-lg bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
              to="/signup"
            >
              Sign up
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
