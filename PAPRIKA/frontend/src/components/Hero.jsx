import { assets } from "../assets/assets";

const Hero = () => {
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
      <img src={assets.homeImg} alt="hero image" className="w-full sm:w-1/2" />
    </div>
  );
};

export default Hero;
