import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={assets.packingLogo} className="w-16 m-auto mb-5" alt="" />
        <p className="font-semibold text-white">برش و بسته بندی دلخواه</p>
        <p className="text-gray-300">ارائه محصولات با برش و بسته بندی دلخواه</p>
      </div>
      <div>
        <img src={assets.waranthyLogo} className="w-16 m-auto mb-5" alt="" />
        <p className="font-semibold text-white">تضمین کیفیت</p>
        <p className="text-gray-300">
          تمامی محصولات پاپریکا تضمین صددرصدی کیفیت و سلامت میشوند
        </p>
      </div>
      <div>
        <img
          src={assets.localDeliveryIcon}
          className="w-16 m-auto mb-5"
          alt=""
        />
        <p className="font-semibold text-white">پرداخت درب منزل</p>
        <p className="text-gray-300">
          امکان انتخاب شیوه پرداخت بصورت آنلاین و حصوری
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
