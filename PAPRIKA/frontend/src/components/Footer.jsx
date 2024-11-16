import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex  grid-cols-[3fr-1fr-1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.Logo} className="mb-5 w-24" alt="" />
          <p className="md:w-2/3 text-gray-200">
            مجموعه پاپریکا مفتخر به ارسال انواع محصولات گوشتی پروتئینی به تمامی
            نقاط شهر مشهد و تربت حیدریه میباشد
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 text-white">مجموعه</p>
          <ul className="flex flex-col gap-1 text-gray-200">
            <li>خانه</li>
            <li>درباره ی ما</li>
            <li>تحویل</li>
            <li>قوانین</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 text-white">راه های ارتباطی</p>
          <ul className="flex flex-col gap-1 text-gray-200">
            <li className="flex justify-start items-center">
              09150707303
              <span>
                <img src={assets.phoneIcon} alt="" className="w-5 mr-3" />
              </span>
            </li>
            <li>
              <span className="cursor-pointer flex justify-start items-center">
                zahra_jomehzadeh_2
                <img
                  src={assets.instagramIcon}
                  alt=""
                  className="w-7 mt-3 mr-2"
                />
              </span>
            </li>
            <li>
              <span className="cursor-pointer flex justify-start items-center">
                zahra_jomehzadeh_2@
                <img
                  src={assets.telegramIcon}
                  alt=""
                  className="w-7 mt-3 mr-2"
                />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center text-white">
          کلیه حقوق مادی و معنوی برای پروتئینی پاپریکا محفوظ است | 2023-2014 ©
          Copyright
        </p>
      </div>
    </div>
  );
};

export default Footer;
