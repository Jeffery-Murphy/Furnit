import postImg1 from "../assets/post_1.jpg"
import postImg2 from "../assets/post_2.jpg"
import postImg3 from "../assets/post_3.jpg"
const Post = () => {
  return (
    <div className="px-32 mb-32">
      <div className="flex justify-between items-end">
        <div>
          <p className="">News & Blogs</p>
          <p className="font-medium text-[30px]">
            Our Latest<span className="text-[#0b410b]"> <br /> News and Blogs</span>
          </p>
        </div>
        <button className="bg-[#0b410b] text-white px-3 py-[6px] text-[12px] rounded-full">View All Blogs</button>
      </div>
      <div className="mt-4 flex space-x-4">
        <div>
            <img src={postImg1} className="overflow-hidden rounded-md" />
            <div className="p-2">
            <p className="font-medium text-[20px]">Funiture Trend 2025:</p>
            <p className="font-medium text-[20px]">What's hot and what's not</p>
            <p className="text-gray-500 text-[13px] mt-1">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <a href="" className="text-[#0b410b] underline text-[12px]">Read more</a>
            </div>
        </div>
        <div>
            <img src={postImg2} className="overflow-hidden rounded-md" />
            <div className="p-2">
            <p className="font-medium text-[20px]">Choosing the Right Dining Table</p>
            <p className="text-gray-500 text-[13px] mt-1">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <a href="" className="text-[#0b410b] underline text-[12px]">Read more</a>
            </div>
        </div>
        <div>
            <img src={postImg3} className="overflow-hidden rounded-md" />
            <div className="p-2">
            <p className="font-medium text-[20px]">New Imports, Chairs, Sofa and More</p>
            <p className="text-gray-500 text-[13px] mt-1">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <a href="" className="text-[#0b410b] underline text-[12px]">Read more</a>
            </div>
        </div>
        <div>
            <img src={postImg3} className="overflow-hidden rounded-md" />
            <div className="p-2">
            <p className="font-medium text-[20px]">The Ultimate Guide to Chose the Right Sofa</p>
            <p className="text-gray-500 text-[13px] mt-1">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <a href="" className="text-[#0b410b] underline text-[12px]">Read more</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
