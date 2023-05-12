import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ImLeaf } from "react-icons/im";
const Navbar = () => {
  let obj = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Shop",
      link: "/shop",
    },
    {
      title: "Pages",
      link: "/pages",
    },
    {
      title: "Contact Us",
      link: "/contactus",
    },
  ];
  return (
    <div className=" w-full h-20 flex items-center justify-between px-20 text-customtext">
      <div className="flex justify-start items-center gap-1">
        <ImLeaf size={30} />
        <h1 className="font-semibold text-2xl">Organick</h1>
        {/* <div className="font-normal text-customtext flex gap-10  ml-24">
          <a className="hover:text-green-700">Home</a>
          <a className="hover:text-green-700">About Us</a>
          <a className="hover:text-green-700">Shop</a>
          <a className="hover:text-green-700">Pages</a>
          <a className="hover:text-green-700">Contact Us</a>
        </div> */}
        {obj.map((item) => {
          return (
            <p className="px-4 hover:underline hover:text-green-700">
              {item.title}
            </p>
          );
        })}
      </div>

      <div className="flex justify-end gap-1 items-center border rounded-full px-1 py-1">
        <div className="bg-customtext rounded-full p-2">
          <AiOutlineShoppingCart
            size={20}
            className="text-white rounded-full"
          />
        </div>

        <h2 className=" text-sm font-medium ">Cart 0</h2>
      </div>
    </div>
  );
};

export default Navbar;
