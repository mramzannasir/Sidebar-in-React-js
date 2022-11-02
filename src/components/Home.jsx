import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar"
import Navpage from "./Navpage"
const Home = () => {
  return (
    <>
      {/* Nav */}

      <section>
        <Navbar />
      </section>

      {/* Sidebar */}
      <section>
        <div className="flex flex-row h-screen w-full">
          <div className="bg-stone-700 pt-3 text-white w-[10%]">
            <Sidebar/>
          </div>
          <div className="flex items-center justify-center w-[90%] bg-green-100">
            <Navpage/>
          </div>
        </div>
      </section>
      {/* Mainpage */}
    </>
  );
};

export default Home;
