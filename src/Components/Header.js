import React, { useState } from "react";
import { AiOutlineBars, AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [toogle, setToogle] = useState(false);

  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] py-[12px] items-center flex justify-between mx-auto">
        <div className="text-3xl font-bold">Blogger</div>
        {toogle ? (
          <AiOutlineCloseCircle
            onClick={() => setToogle(!toogle)}
            className="text-white text-3xl md:hidden block"
          />
        ) : (
          <AiOutlineBars
            onClick={() => setToogle(!toogle)}
            className="text-white text-3xl md:hidden block"
          />
        )}

        <ul className="hidden md:flex  flex text-white gap-5">
          <li className="p-5">Home</li>
          <li className="p-5">About</li>
          <li className="p-5">Contact Us</li>
          <Link to="/login">
            <li className="p-5">Login</li>
          </Link>
          <Link to="/register">
            <li className="p-5">Register</li>
          </Link>
          <Link to="/crud">
            <li className="p-5">Crud</li>
          </Link>
        </ul>
        {/* Responsive mENU */}
        <ul
          className={` duration-300 md:hidden w-full h-screen text-white gap-5 fixed bg-black top-[92px] 
        
         ${toogle ? "left-[0]" : "left-[-100%]"}
         `}
        >
          <li className="p-5">Home</li>
          <li className="p-5">About</li>
          <li className="p-5">Contact Us</li>
          <li className="p-5">Login</li>
          <li className="p-5">Register</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
