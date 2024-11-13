import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6"; // Import left and right arrow icons
import img4 from "../assets/img_4.jpg";
import img5 from "../assets/img_5.jpg";
import img6 from "../assets/img_6.jpg";
import img7 from "../assets/img_7.jpg";
import { ImQuotesRight } from "react-icons/im";

const Comment = () => {
  const comments = [
    {
      name: "Jeff Murpy",
      role: "Software Engineer",
      img: img4,
      rating: 5.0,
      comment:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
    },
    {
      name: "Williams Emelia",
      role: "Product Designer",
      img: img5,
      rating: 5.0,
      comment:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
    },
    {
      name: "Jeff Murpy",
      role: "Software Engineer",
      img: img6,
      rating: 5.0,
      comment:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
    },
    {
      name: "Williams Emelia",
      role: "Product Designer",
      img: img7,
      rating: 5.0,
      comment:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the previous set of comments
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? comments.length - 2 : prevIndex - 2
    );
  };

  // Navigate to the next set of comments
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 >= comments.length ? 0 : prevIndex + 2
    );
  };

  return (
    <div className="px-32 py-10 bg-[#b9b9b943] my-32">
      <p className="text-center">Testimonial</p>
      <p className="font-medium text-center text-[30px]">
        Our <span className="text-[#0b410b]">What Our Clients Say</span>
      </p>
      <div className="flex items-center justify-between mt-10">
        {/* Left Arrow */}
        <button onClick={handlePrev} className="text-gray-600">
          <FaArrowLeftLong />
        </button>

        {/* Display Comments */}
        <div className="flex space-x-6">
          {comments.slice(currentIndex, currentIndex + 2).map((item, index) => (
            <div
              key={index}
              className="w-[500px] bg-white rounded-md"
            >
                <div className="flex justify-between pr-4">
              <div className="flex space-x-2">
                <div className="bg-[#0b410b] w-24 h-24 flex items-center justify-center rounded-tr-full rounded-br-full rounded-tl-md">
                  <div className="w-20 h-20 rounded-full border-white border-2 flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 rounded-full object-cover"
                    />
                    </div>
                </div>
                <div className="mt-2">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-500 text-[14px]">{item.role}</p>
                    <p className="text-[12px] font-medium">⭐⭐⭐⭐⭐ {item.rating}.0</p>
                </div>
                </div>
                <span className="mt-4 bg-[#b9b9b943] p-2 rounded-full w-8 h-8 flex items-center justify-center">
                    <ImQuotesRight />
                </span>
              </div>
              <p className="p-4 text-gray-500 text-[14px]">{item.comment}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button onClick={handleNext} className="text-gray-600">
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default Comment;
