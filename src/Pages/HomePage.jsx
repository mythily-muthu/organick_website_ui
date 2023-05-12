import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
const HomePage = () => {
  return (
    <div
      className="flex flex-col h-full w-full relative rounded-lg"
      style={{
        height: "calc(100vh - 80px)",
      }}
    >
      <img
        className="object-fill h-full w-full"
        src="https://i.pinimg.com/736x/3d/69/ab/3d69ab8f3e40e5c6e5779248a784b4ae.jpg"
        alt="bgimg"
      />
      <div className="absolute pt-[12%] pl-[12%] ">
        <p
          className="text-green-600 text-2xl"
          style={{
            fontFamily: "Neucha",
          }}
        >
          Made With Nature
        </p>
        <h1 className="text-5xl text-customtext font-bold py-4 ">
          Welcome to the
          <br />
          <span style={{ display: "block" }}>world of nature</span>
          and organic.
        </h1>

        <div className="flex items-center py-3">
          <button className="px-11 py-3 bg-yellow-400 rounded-lg text-customtext text-sm font-medium relative">
            Explore Now
            <BiRightArrowAlt className="absolute top-3.5 right-3 text-white bg-customtext rounded-full" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
