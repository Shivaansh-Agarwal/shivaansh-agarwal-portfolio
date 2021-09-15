import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between border-2 p-5">
      <Link className="font-semibold cursor-pointer text-2xl" to="/">
        Shivaansh Agarwal
      </Link>
      <nav className="flex flex-row justify-items-start mt-4 md:mt-0">
        <Link className="cursor-pointer mr-4" to="/">
          Home
        </Link>
        <Link className="cursor-pointer mr-4" to="/projects">
          Projects
        </Link>
        <Link className="cursor-pointer mr-4" to="/blogs">
          Blogs
        </Link>
        <Link className="cursor-pointer" to="/others">
          Others
        </Link>
      </nav>
    </header>
  );
};
