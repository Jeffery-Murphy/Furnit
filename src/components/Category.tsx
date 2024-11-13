import { BsBoxSeam } from "react-icons/bs";
import { HiOutlineWallet } from "react-icons/hi2";
import { BiSupport } from "react-icons/bi";
import img8 from "../assets/img_8.png";
import img9 from "../assets/img_9.png";
import img10 from "../assets/img_10.png";
const Category = () => {
  return (
    <div className="p-32">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex">
            <BsBoxSeam size={30} className="absolute" />
            <div className="w-5 h-5 mt-4 rounded-full bg-[#ffa500]"></div>
          </div>
          <div>
            <p className="font-medium">Free Shipping</p>
            <p className="text-[12px]">Free Shipping for order above $200</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex">
            <HiOutlineWallet size={30} className="absolute" />
            <div className="w-5 h-5 mt-4 rounded-full bg-[#ffa500]"></div>
          </div>
          <div>
            <p className="font-medium">Flexible Payment</p>
            <p className="text-[12px]">Multiple Secured payment options</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex">
            <BiSupport size={30} className="absolute" />
            <div className="w-5 h-5 mt-4 rounded-full bg-[#ffa500]"></div>
          </div>
          <div>
            <p className="font-medium">24 / 7 Support</p>
            <p className="text-[12px]">We support online all days</p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between">
        <div className="w-[35%] rounded-md h-[600px] py-4 px-3 bg-[#b9b9b943]">
          <span className="bg-[#FFFFFF] px-3 py-1 rounded-full">
            <span className="text-[#ffa500] font-medium">
              1000+{" "}
              <span className="font-medium text-[12px] text-black">Items</span>
            </span>
          </span>
          <div className="mt-2">
            <p className="font-medium text-[18px]">Chairs</p>
            <p className="text-[14px] w-[80%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p className="my-2 text-[14px]">Gaming Chair</p>
            <p className="my-2 text-[14px]">Office Chair</p>
            <p className="my-2 text-[14px]">Bar Stool</p>
          </div>
          <div className="absolute ml-14 -mt-16">
            <img src={img10} className="" />
          </div>
        </div>
        <div className="w-[63%] flex flex-col items-center space-y-6">
            <div className="rounded-md h-[285px] w-full py-4 px-3 bg-[#b9b9b943]">
            <span className="bg-[#FFFFFF] px-3 py-1 rounded-full">
            <span className="text-[#ffa500] font-medium">
              750+{" "}
              <span className="font-medium text-[12px] text-black">Items</span>
            </span>
          </span>
          <div className="mt-2">
            <p className="font-medium text-[18px]">Sofa</p>
            <p className="my-2 text-[14px]">Living room Sofa</p>
            <p className="my-2 text-[14px]">Reception Sofa</p>
            <p className="my-2 text-[14px]">Curved sofa</p>
          </div>
            <div className="absolute ml-14 -mt-64">
            <img src={img9} className="w-[800px] h-[400px]" />
          </div>
            </div>
            <div className="rounded-md h-[290px] py-4 w-full px-3 bg-[#b9b9b943]">
            <span className="bg-[#FFFFFF] px-3 py-1 rounded-full">
            <span className="text-[#ffa500] font-medium">
              450+{" "}
              <span className="font-medium text-[12px] text-black">Items</span>
            </span>
          </span>
          <div className="mt-2">
            <p className="font-medium text-[18px]">Lighting</p>
            <p className="my-2 text-[14px]">Ceiling lighting</p>
            <p className="my-2 text-[14px]">Table lighting</p>
            <p className="my-2 text-[14px]">Floor lighting</p>
          </div>
            <div className="absolute ml-72 -mt-36">
            <img src={img8} className="w-[350px] h-[200px]" />
          </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
