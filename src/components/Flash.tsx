import { useState, useEffect } from 'react';
import { IoArrowForwardOutline } from "react-icons/io5";
import hallImg1 from "../assets/hall_1.jpg"
import hallImg2 from "../assets/hall_2.jpg"
const Flash = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 4,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });

      useEffect(() => {
        // Calculate the target time (4 days from now)
        const targetTime = new Date().getTime() + 4 * 24 * 60 * 60 * 1000;
    
        // Update the timer every second
        const interval = setInterval(() => {
          const currentTime = new Date().getTime();
          const difference = targetTime - currentTime;
    
          if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
            setTimeLeft({ days, hours, minutes, seconds });
          } else {
            // Clear the interval when time is up
            clearInterval(interval);
          }
        }, 1000);
    
        // Clean up the interval on component unmount
        return () => clearInterval(interval);
      }, []);
  return (
    <div className="px-32 py-32 flex justify-between">
        <div className="bg-[#b9b9b943] px-4 py-20 flex flex-col justify-center items-center h-96 rounded-md w-[67%]">
            <div>
                <p className="font-medium text-[30px] text-center">Flash <span className="text-[#0b410b]">Sale!</span></p>
                <p>Get 25% off - Limited Time Offer!</p>
            </div>
            <div className="flex space-x-2 mt-10 text-2xl items-center">
        <div className="flex flex-col items-center">
          <span className="font-medium">0{timeLeft.days}</span>
          <span className="text-[12px] text-gray-500">Days</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span className="font-medium">{timeLeft.hours}</span>
          <span className="text-[12px] text-gray-500">Hours</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span className="font-medium">{timeLeft.minutes}</span>
          <span className="text-[12px] text-gray-500">Minutes</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span className="font-medium">{timeLeft.seconds}</span>
          <span className="text-[12px] text-gray-500">Seconds</span>
        </div>
      </div>
        <button className="bg-[#0b410b] mt-10 flex items-center rounded-full px-4 py-2 text-[12px] font-medium text-white">Shop Now
                <span className="ml-2">
                    <IoArrowForwardOutline />
                </span>
            </button>
        </div>
      <div className="relative w-[15%] h-96 overflow-hidden rounded-md">
        <img src={hallImg1} className="h-full w-full object-cover" />
      </div>

      <div className="relative w-[15%] h-96 overflow-hidden rounded-md">
        <img src={hallImg2} className="h-full w-full object-cover" />
      </div>
    </div>
  )
}

export default Flash