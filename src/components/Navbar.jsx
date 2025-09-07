import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);

  const navLinkClasses =
    "text-gray-700 font-medium cursor-pointer hover:underline";

  return (
    <nav className="flex items-center justify-between h-[10vh] w-full px-5 bg-gray-300">
      <h2 className="text-3xl font-bold">Junaid</h2>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-4xl flex flex-col items-center justify-center relative">
        <button onClick={() => setMenu(!menu)} aria-label="Toggle menu">
          <IoMenu />
        </button>
        {menu && (
          <div className="bg-gray-200 absolute top-8 right-1 z-50 rounded-sm p-2 pr-6 text-sm flex flex-col gap-1">
            <NavLink to="/" className={navLinkClasses}>
              Home
            </NavLink>
            <NavLink to="/skills" className={navLinkClasses}>
              Skills
            </NavLink>
            <NavLink to="/projects" className={navLinkClasses}>
              Projects
            </NavLink>
            <NavLink to="/education" className={navLinkClasses}>
              Education
            </NavLink>
            <NavLink to="/experience" className={navLinkClasses}>
              Experience
            </NavLink>
            <NavLink to="/contact" className={navLinkClasses}>
              Contact
            </NavLink>
          </div>
        )}
      </div>
      

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        <NavLink to="/" className="mx-2 cursor-pointer font-bold hover:underline">
          Home
        </NavLink>
        <NavLink to="/skills" className="mx-2 cursor-pointer font-bold hover:underline">
          Skills
        </NavLink>
        <NavLink to="/projects" className="mx-2 cursor-pointer font-bold hover:underline">
          Projects
        </NavLink>
        <NavLink to="/education" className="mx-2 cursor-pointer font-bold hover:underline">
          Education
        </NavLink>
        <NavLink to="/experience" className="mx-2 cursor-pointer font-bold hover:underline">
          Experience
        </NavLink>
      </ul>

      <button
        onClick={() => navigate("/contact")}
        className="hidden md:flex bg-yellow-500 px-6 text-white py-1 text-lg border-3 border-transparent hover:border-yellow-500 hover:bg-white hover:text-yellow-500 rounded-full font-bold cursor-pointer"
      >
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
