import { assets } from "../assets/assets";
import MyImage from "./MyImage";

const Hero = () => {
  const imageObject = {
    src: assets.IMG_22,
    alt: "hero-image",
  };

  return (
    <div className="flex flex-col sm:flex-row border border-baseColorRed">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-white ">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">انتخابی مطمئن</p>
          </div>
          <h1 className="text-xl sm:py-3 lg:text-5xl leading-relaxed my-2.5">
            پروتئین خانگی پاپریکا
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">خریدی دلپذیر</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* Hero Right Side */}
      <div className="w-full sm:w-1/2">
        <MyImage image={imageObject} />
      </div>
    </div>
  );
};

export default Hero;

// import { assets } from "../assets/assets";
// import MyImage from "./MyImage";

// const Hero = () => {
//   return (
//     <div className="flex flex-col sm:flex-row border border-gray-400 ">
//       {/* Hero Left Side */}
//       <div className="w-full  sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
//         <div className="text=[#414141] ">
//           <div className="flex items-center gap-2">
//             <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
//             <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
//           </div>
//           <h1 className="prata-regular text-xl sm:py-3 lg:text-5xl leading-relaxed">
//             Latest Arrivals
//           </h1>
//           <div className="flex items-center gap-2">
//             <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
//             <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
//           </div>
//         </div>
//       </div>
//       {/* Hero Right Side */}
//       <img className="w-full sm:w-1/2" src={assets.IMG_14} alt="" />
//     </div>
//   );
// };

// export default Hero;
