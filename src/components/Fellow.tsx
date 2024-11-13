import img1 from "../assets/hall_1.jpg";
import img2 from "../assets/hall_2.jpg";
import img3 from "../assets/img_1.jpg";
import img4 from "../assets/img_2.jpg";
import img5 from "../assets/img_3.jpg";
import img6 from "../assets/post_1.jpg";
import img7 from "../assets/post_2.jpg";
import img8 from "../assets/post_3.jpg";
const Fellow = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  return (
    <div className="bg-[#b9b9b943] py-10">
      <p className="text-center">Fellow Us</p>
      <p className="font-medium text-center text-[30px]">
        Fellow Us On<span className="text-[#0b410b]"> Instagram</span>
      </p>
      <div
        className="flex space-x-4 overflow-scroll mt-4"
        style={{ scrollbarWidth: "none" }}
      >
        {images.map((item, index) => (
          <div key={index}>
            <div className="w-44 h-32 rounded-md relative">
              <img
                src={item}
                className="w-full h-full overflow-hidden rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fellow;
