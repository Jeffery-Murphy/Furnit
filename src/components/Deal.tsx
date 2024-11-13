import reclinerImg1 from "../assets/recliner1.png";
import gameImg2 from "../assets/game2.png";
import gameImg1 from "../assets/game1.png";
import reclinerImg0 from "../assets/recliner0.png";
import reclinerImg2 from "../assets/recliner2.png";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { IoArrowForwardOutline } from "react-icons/io5";
const Deal = () => {
  const data = [
    {
      name: "Recliner Chair Wood",
      img: reclinerImg2,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      tag: "Chair",
      price: 80.0,
      old_price: 160.0,
      discount: 50,
      rate: 4.9,
    },
    {
      name: "Recliner Chair Wood",
      img: reclinerImg0,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      tag: "Chair",
      price: 80.0,
      old_price: 160.0,
      discount: 50,
      rate: 4.9,
    },
    {
      name: "Recliner Chair Wood",
      img: reclinerImg1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      tag: "Chair",
      price: 80.0,
      old_price: 160.0,
      discount: 50,
      rate: 4.9,
    },
  ];
  return (
    <div className="pl-32">
      <div className="flex items-center justify-between pr-32">
        <div className="w-[50%]">
          <p>Today Deals</p>
          <p className="text-[30px] font-medium">
            <span className="text-[#0b410b]">Deals</span> of the Day
          </p>
        </div>
        <div className="w-[50%]">
          <p className="text-[14px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has
          </p>
        </div>
      </div>
      <div
        className="flex-1 overflow-x-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex space-x-4 py-4">
          {data.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row border p-2  rounded-md w-[450px] h-[350px] md:w-[600px]">
                <div className="relative w-full md:w-1/2 h-full bg-[#b9b9b943] md:h-full rounded-md">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-[270px] mt-14 w-[270px] object-cover"
                  />
                  <div className="absolute flex-col space-y-2 items-center justify-center top-2 left-2">
                    <span className="text-[12px] bg-[#0b410b] text-white px-2 py-1 rounded-full">
                      {item.discount}% OFF
                    </span>
                  </div>
                  <div className="absolute flex-col space-y-2 items-center justify-center top-2 right-2 flex">
                    <button className="bg-white p-2 rounded-full">
                      <IoMdHeartEmpty />
                    </button>
                    <button className="bg-white p-2 rounded-full">
                      <BsCart2 />
                    </button>
                    <button className="bg-white p-2 rounded-full">
                      <MdOutlineZoomOutMap />
                    </button>
                  </div>
                </div>

                <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-4 flex flex-col justify-between">
                  <div>
                    <p className="text-[12px] text-gray-500 mb-2">{item.tag}</p>
                    <p className="font-medium">{item.name}</p>
                    <div className="flex items-center space-x-4">
                      <span className="text-xl font-bold text-gray-800">
                        ${item.price.toFixed(2)}
                      </span>
                      <span className="text-sm line-through text-gray-500">
                        ${item.old_price.toFixed(2)}
                      </span>
                    </div>
                    <div className="mt-2 text-sm font-medium">
                      ⭐ {item.rate}
                    </div>
                    <p className="text-[14px] mt-4">{item.description}</p>
                    <button className="text-[#0b410b] mt-10 flex items-center rounded-full px-4 py-2 text-[12px] font-medium">
                      Shop Now
                      <span className="ml-2">
                        <IoArrowForwardOutline />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between pr-32">
        <div className="w-[49%] h-[400px]">
          <div className="relative w-full md:w-full h-full bg-[#b9b9b943] md:h-full rounded-md">
            <div className="p-4">
              <p className="text-[12px]">Flat 20% Discount</p>
              <p className="text-[30px] font-medium my-2">
                Latest Gaming <br /> Chair
              </p>
              <p className="w-[60%] text-[14px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.
              </p>
              <button className="bg-[#0b410b] mt-4 flex items-center rounded-full px-4 py-2 text-[12px] font-medium text-white">Shop Now
                <span className="ml-2">
                    <IoArrowForwardOutline />
                </span>
            </button>
            </div>
            <img
              src={gameImg2}
              className="h-[400px] mt-14 w-[200px] absolute bottom-0 right-0 object-cover"
            />
          </div>
        </div>
        <div className="w-[49.5%] h-[400px]">
          <div className="relative w-full md:w-full h-full bg-[#ffa500] md:h-full rounded-md">
            <div className="p-4">
              <p className="text-[12px]">Flat 15% Discount</p>
              <p className="text-[30px] font-medium my-2">
                Wood Chair <br /> Collection
              </p>
              <p className="w-[60%] text-[14px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.
              </p>
              <button className="bg-[#0b410b] mt-4 flex items-center rounded-full px-4 py-2 text-[12px] font-medium text-white">Shop Now
                <span className="ml-2">
                    <IoArrowForwardOutline />
                </span>
            </button>
            </div>
            <img
              src={gameImg1}
              className="h-[400px] mt-14 w-[300px] absolute right-0 -bottom-5 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deal;
