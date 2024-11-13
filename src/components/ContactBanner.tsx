import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillPinterest } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGooglemessages } from "react-icons/si";

const ContactBanner = () => {
  return (
    <div className="bg-[#0b410b] flex px-32 items-center justify-between text-white py-2">
      <div>
        <p className="text-sm">Call: +233 050 970 0012</p>
      </div>
      <div>
        <p className="text-sm">
          Sign up and GET 20% OFF for your first order{" "}
          <span className="text-[#ffa500] ml-2">Sign up now</span>
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <FaFacebook color="#ffa500" size={20} />
        <AiFillTwitterCircle color="#ffa500" size={20} />
        <AiFillPinterest color="#ffa500" size={20} />
        <IoLogoWhatsapp color="#ffa500" size={20} />
        <SiGooglemessages color="#ffa500" size={20} />
      </div>
    </div>
  );
};

export default ContactBanner;
