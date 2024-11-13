import { useState } from "react";
import chairImg1 from "../assets/chair_1.png"
import chairImg2 from "../assets/chair_2.png"
import chairImg3 from "../assets/chair_3.png"
import tableImg1 from "../assets/table_1.png"
import tableImg2 from "../assets/table_2.png"

const Collection = () => {
    const [active, setActive] = useState("All Products");
    const data = [
        {
            name: "Woodend Sofa Chair",
            img: chairImg1,
            price: 80.00,
            old_price: 160.00,
            discount: 50,
            rate: 4.9
        },
        {
            name: "Circular Sofa Chair",
            img: chairImg2,
            price: 100.00,
            old_price: 120.00,
            discount: 15,
            rate: 4.5
        },
        {
            name: "Bed Side Table",
            img: tableImg1,
            price: 20.00,
            old_price: 60.00,
            discount: 60,
            rate: 4.6
        },
        {
            name: "Curved Sofa Chair",
            img: chairImg3,
            price: 100.00,
            old_price: 110.00,
            discount: 5,
            rate: 4.8
        },
        {
            name: "Gaming Table",
            img: tableImg2,
            price: 70.00,
            old_price: 100.00,
            discount: 30,
            rate: 4.8
        }
    ]
  return (
    <div className="pl-32">
      <p className="text-center">Our Products</p>
      <p className="font-medium text-center text-[30px]">
        Our <span className="text-[#0b410b]">Products Collections</span>
      </p>
      <div className="my-4">
        <ul className="list-none sm:flex hidden space-x-4 items-center justify-center flex-1">
          {[
            {
              id: "All Products",
              title: "All Products",
            },
            {
              id: "Latest Products",
              title: "Latest Products",
            },
            {
              id: "Best Stellers",
              title: "Best Stellers",
            },
            {
              id: "Featured Products",
              title: "Featured Products",
            }
          ].map((nav, index) => (
            <li
              key={index}
              className={`font-poppins border-[#b9b9b9a2] rounded-full px-4 py-2 border-[1px] cursor-pointer font-medium text-[12px] ${
                active === nav.title ? "text-[#FFFFFF] bg-[#0b410b]" : "text-[#000000]"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`account/signin`} className="pb-4">
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 overflow-x-scroll pl-4" style={{scrollbarWidth: 'none'}}>
      <div className="flex px-4 space-x-4 py-4">
        {data.map((item, index) => (
            <div key={index}>
          <div
            
            className="p-4 w-[350px] bg-[#b9b9b943] rounded-md"
            >
                <span className="bg-[#0b410b] rounded-full px-2 py-1 text-[12px] text-white">{item.discount}% OFF</span>
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-72 object-cover rounded-lg mt-4"
            />
            </div>
            <div className="mt-2">
                <div className="flex justify-end text-[12px] font-medium">⭐ {item.rate}</div>
              <h3 className="text-[15px] font-medium">{item.name}</h3>
              <div className="flex items-center space-x-2">
              <span className="text-gray-800 font-medium">${item.price.toFixed(2)}</span>
              <span className="text-sm line-through text-gray-500">${item.old_price.toFixed(2)}</span>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Collection;
