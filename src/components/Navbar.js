import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function Navbar() {
  return (
    <header className="bg-black">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-1 md:px-2 mr-2 md:mr-6 text-red-100 hover:text-green-800 md:text-4xl font-bold cursive "
          >
            Chris Fonseca
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-6 md:px-3 sm:px-1 mr-2 sm:mr-6 rounded text-red-200 hover:text-green-800 font-bold cursive lg:tracking-widest"
            activeClassName="text-red-100 bg-red-700"
          >
            About
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-6 lg:px-3 md:px-3 sm:px-1 mr-2 sm:mr-6 rounded text-red-200 hover:text-green-800 font-bold cursive lg:tracking-widest"
            activeClassName="text-red-100 bg-red-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="inline-flex items-center py-6 lg:px-3 md:px-3 sm:px-1 mr-2 sm:mr-6 rounded text-red-200 hover:text-green-800 ont-bold cursive lg:tracking-widest"
            activeClassName="text-red-100 bg-red-700"
          >
            Contact
          </NavLink>
        </nav>

        <div className="inline-flex py-6 px-1 md:px-2 my-5">
          <SocialIcon
            url="https://github.com/cfonseca2013"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/christopher-fonseca-822434b9/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="mailto:fonseca.j.chris@gmail.com"
            className="mr-4"
            target="_blank"
            fgColor="#FF8000"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
