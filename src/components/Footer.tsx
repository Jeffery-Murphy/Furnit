import { FaAngleDown } from "react-icons/fa6";
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { TiSocialYoutubeCircular } from "react-icons/ti";
const Footer = () => {
  return (
    <div className="mt-32">
      <div className="bg-[#0b410b] justify-between flex px-32 py-10">
        <div className="w-[30%]">
          <div className="flex items-center space-x-1">
            <div className="text-[#0b410b] bg-[#ffa500] w-7 text-[20px] h-7 font-semibold rounded-full items-center flex justify-center">
              F
            </div>
            <p className="font-medium text-[18px] text-[#FFFFFF]">
              Furnit
              <span className="font-medium text-[18px] text-[#ffa500]">.</span>
            </p>
          </div>
          <p className="my-4 text-white text-[14px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          <div className="flex items-center space-x-2">
            <div className="bg-[#ffffff53] rounded-full p-1">
                <FaFacebook color="#FFFFFF" size={25} />
            </div>
            <div className="bg-[#ffffff53] rounded-full p-1">
                <AiFillTwitterCircle color="#FFFFFF" size={25} />
            </div>
            <div className="bg-[#ffffff53] rounded-full p-1">
                <FaPinterest color="#FFFFFF" size={25} />
            </div>
            <div className="bg-[#ffffff53] rounded-full p-1">
                <RiInstagramFill color="#FFFFFF" size={25} />
            </div>
            <div className="bg-[#ffffff53] rounded-full p-1">
                <TiSocialYoutubeCircular color="#FFFFFF" size={25} />
            </div>
          </div>
        </div>
        <div className="w-[60%] items-start flex justify-between">
            <div>
                <p className="font-medium text-[#FFFFFF]">Company</p>
                <ul className="text-white space-y-3 mt-4">
                <li>
                    <a href="#">About Us</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                </li>
                <li>
                    <a href="#">Career</a>
                </li>
            </ul>
            </div>
            <div>
            <p className="font-medium text-[#FFFFFF]">Customer Services</p>
            <ul className="text-white space-y-3 mt-4">
                <li>
                    <a href="#">My Account</a>
                </li>
                <li>
                    <a href="#">Track your Order</a>
                </li>
                <li>
                    <a href="#">Return</a>
                </li>
                <li>
                    <a href="#">FAQ</a>
                </li>
            </ul>
            </div>
            <div>
            <p className="font-medium text-[#FFFFFF]">Our Information</p>
            <ul className="text-white space-y-3 mt-4">
                <li>
                    <a href="#">Privacy</a>
                </li>
                <li>
                    <a href="#">Terms & Conditions</a>
                </li>
                <li>
                    <a href="#">Return Privacy</a>
                </li>
            </ul>
            </div>
            <div>
            <p className="font-medium text-[#FFFFFF]">Contact Us</p>
            <div className="text-[#FFFFFF] mt-4 space-y-3">
                <p className="text-[14px]">+233 050 970 0012</p>
                <p className="text-[14px]">tinganjeff90@gmail.com</p>
                <p className="text-[14px]">8505 Poston Rd. <br />Inglewood, Maine <br /> 98000.</p>
            </div>
            </div>
        </div>
      </div>
      <div className="px-32 py-2 bg-[#ffa500] flex items-center justify-between">
        <p className="font-medium text-[14px]">
          Copyright @ 2024 Furnit. All Right Reserved
        </p>
        <div className="flex items-center space-x-2">
          <div className="flex items-center font-medium space-x-1 text-[14px]">
            English <FaAngleDown className="ml-1" />{" "}
          </div>
          <span> | </span>
          <div className="flex font-medium items-center space-x-1 text-[14px]">
            USD <FaAngleDown className="ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
