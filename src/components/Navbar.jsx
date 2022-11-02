import React from "react";
import {BsBook} from "react-icons/bs"
const Navbar = () => {
  return (
    <>
      <nav className="flex p-2 text-stone-200 items-center bg-gray-700 space-x-3">
        <div>
          <BsBook className="text-2xl text-white" />
        </div>
        <div>
          <h1>Coding Book</h1>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
