import React from "react";
import { NavLink } from "react-router-dom";
import SideData from "../Data/Data";


const Sidebar = () => {
  return (
    <>
      <div className="text-white">
        {SideData.map((item, index) => {
          return (
            <div key={index}>
              <NavLink to={item.path} className="flex items-center transition-all duration-200 cursor-pointer p-2 rounded-lg text-center font-semibold hover:bg-teal-700 text-xl my-6 space-x-4">
                <span className="text-2xl">{item.icon}</span>
                <span className="my-4">{item.title}</span>
              </NavLink>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
