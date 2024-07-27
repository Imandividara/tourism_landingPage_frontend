
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="fixed top-0 left-0 w-full text-white p-4 flex justify-between items-center z-10 ">
     <div>
      <img src="4ac564b1f9c9f73824fc640cc5e0a3b2-removebg-preview.png" alt="" className="w-12 h-12 rounded-full mx-auto"/>

      </div>
      <div>
        <NavLink to="/" className="mx-2 font-semibold text-black hover:text-blue-500">Home</NavLink>
        <NavLink to="/about" className="mx-2 font-semibold text-black hover:text-blue-500">About</NavLink>
        <NavLink to="/contact" className="mx-2 font-semibold text-black hover:text-blue-500">Contact Us</NavLink>
      </div>
      <button onClick={toggleTheme} className="bg-gray-800 px-4 py-2 rounded-full">
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

export default NavBar;

