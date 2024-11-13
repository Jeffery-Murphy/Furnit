import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";

const NavBar = () => {
  const [active, setActive] = useState("Home");
  return (
    <div className="bg-white px-32 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-1">
        <div className="text-[#ffa500] bg-[#0b410b] w-7 text-[20px] h-7 font-semibold rounded-full items-center flex justify-center">
          F
        </div>
        <p className="font-medium text-[18px] text-[#0b410b]">
          Furnit
          <span className="font-medium text-[18px] text-[#ffa500]">.</span>
        </p>
      </div>
      <div>
        <ul className="list-none sm:flex hidden space-x-10 items-center flex-1">
          {[
            {
              id: "Home",
              title: "Home",
            },
            {
              id: "Shop",
              title: "Shop",
            },
            {
              id: "Categories",
              title: "Categories",
            },
            {
              id: "About Us",
              title: "About Us",
            },
            {
              id: "Contact Us",
              title: "Contact Us",
            },
            {
              id: "Blog",
              title: "Blog",
            },
          ].map((nav, index) => (
            <li
              key={index}
              className={`font-poppins uppercase cursor-pointer font-medium text-[12px] ${
                active === nav.title ? "text-[#ffa500]" : "text-[#000000]"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`account/signin`} className="pb-4">
                {nav.title}
              </a>
              <div
                className={`${
                  active === nav.title
                    ? "w-4 h-[2px] mt-1 rounded-full bg-[#ffa500] items-center"
                    : null
                }`}
              ></div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <IoSearchOutline size={20} />
        <IoIosHeartEmpty size={20} />
        <BsCart2 size={20} />
        <VscAccount size={20} />
      </div>
    </div>
  );
};

export default NavBar;
