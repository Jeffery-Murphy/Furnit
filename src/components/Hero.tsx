import { PiOfficeChairFill } from "react-icons/pi";
import { MdCelebration } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { IoArrowForwardOutline, IoArrowBackOutline } from "react-icons/io5";
import { useState } from "react";
import img1 from "../assets/img_1.jpg"
import img2 from "../assets/img_2.jpg"
import img3 from "../assets/img_3.jpg"
import img4 from "../assets/img_4.jpg"
import img5 from "../assets/img_5.jpg"
import img6 from "../assets/img_6.jpg"
import img7 from "../assets/img_7.jpg"
const Hero = () => {
    const images = [
        img1,
        img2,
        img3
      ];
      const [currentIndex, setCurrentIndex] = useState(0);

      const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
      const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      };
  return (
    <div className="pl-32 py-36 space-x-10 flex bg-[#b9b9b943]">
      <div className="w-[35%]">
        <div className="bg-white rounded-full flex items-center justify-center space-x-2 p-2 w-[270px]">
          <PiOfficeChairFill color={"#0b410b"} />
          <p className="font-medium text-[14px]">
            The Best Online Furnitures Store
          </p>
          <div className="">
            <MdCelebration color="#ffa500" size={15} />
          </div>
        </div>
        <p className="font-medium text-[35px] mt-8">
          Explore Our Modern{" "}
          <span className="text-[#0b410b]">Furniture Collections</span>
        </p>
        <p className="text-sm my-2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className="flex items-center space-x-10 mt-8">
            <button className="bg-[#0b410b] flex items-center rounded-full px-4 py-2 text-[12px] font-medium text-white">Shop Now
                <span className="ml-2">
                    <IoArrowForwardOutline />
                </span>
            </button>
            <p className="text-[#0b410b] underline">View All Products</p>
        </div>
        <div className="mt-8 flex items-center space-x-4">
            <div className="flex-row flex">
                <div className="border-[#FFFFFF] rounded-full border-[2px] h-8 w-8">
                    <img src={img4} className="w-full object-cover h-full overflow-auto rounded-full" />
                </div>
                <div className="border-[#FFFFFF] -ml-3 rounded-full border-[2px] h-8 w-8">
                    <img src={img5} className="w-full object-cover h-full overflow-auto rounded-full" />
                </div>
                <div className="border-[#FFFFFF] -ml-3 rounded-full border-[2px] h-8 w-8">
                    <img src={img6} className="w-full object-cover h-full overflow-auto rounded-full" />
                </div>
                <div className="border-[#FFFFFF] -ml-3 rounded-full border-[2px] h-8 w-8">
                    <img src={img7} className="w-full object-cover h-full overflow-auto rounded-full" />
                </div>
                <div className="border-[#ffa500] flex items-center justify-center bg-[#ffa500] -ml-3 rounded-full border-[2px] h-8 w-8">
                <IoMdAdd color="#000000" />
                </div>
            </div>
            <div>
                <p className="font-bold text-[14px]">4.9 Rating+</p>
                <p className="text-[12px]">Trusted by 50+ Companies</p>
            </div>
        </div>
      </div>
      <div className="flex-1">
      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
        <div className="flex relative space-x-5 -mr-56">
          <img
            src={images[currentIndex]}
            alt="Full display"
            className="w-[450px] overflow-hidden rounded-md h-[250px] object-cover"
            />
          <img
            src={images[(currentIndex + 1) % images.length]}
            alt="Half display"
            className="w-[450px] h-[250px] overflow-hidden rounded-md object-cover"
            />
          <img
            src={images[(currentIndex + 2) % images.length]}
            alt="Half display"
            className="w-[450px] h-[250px] overflow-hidden rounded-md object-cover"
            />
            </div>
        </div>
        <div className="flex py-4 space-x-2 ">
          <button
            onClick={handlePrev}
            className="bg-[#0b410b] rounded-full p-2"
          >
                        <IoArrowBackOutline color="#FFFFFF" />
          </button>
          <button
            onClick={handleNext}
            className="bg-[#ffa500] rounded-full p-2"
          >
            <IoArrowForwardOutline color="#000000" />
          </button>
        </div>
        </div>
    </div>
  );
};

export default Hero;
