import { MdEmail } from "react-icons/md";

const Subscribe = () => {
  return (
    <div className="px-32 bg-[#b9b9b943] py-10 flex flex-col items-center justify-center">
      <p className="text-center">Our Newsletter</p>
      <p className="font-medium text-center text-[30px]">
        Subscribe to Our Newsletter to Get
        <span className="text-[#0b410b]">
          <br /> Updates to Our Latest Collection
        </span>
      </p>
      <p className="text-center text-[12px] mt-4">
        Get 20% off on your first order just by subscribing to our newsletter
      </p>
      <div className="flex items-center space-x-2 mt-10">
        <div className="bg-white rounded-full p-2 flex items-center space-x-2 pr-10">
            <span className="w-6 h-6 rounded-full bg-[#0b410b] flex items-center justify-center">
                <MdEmail color="#FFFFFF" />
            </span>
            <input placeholder="Enter Email Address" className="text-[12px]" />
        </div>
        <button className="bg-[#ffa500] rounded-full px-4 py-[8px] text-[14px] font-medium">Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
