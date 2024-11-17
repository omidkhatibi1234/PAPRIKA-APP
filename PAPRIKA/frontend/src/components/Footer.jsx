import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col gap-10 justify-around items-center my-10 mt-40 text-sm sm:flex-row">
        <div className="flex flex-col justify-center items-center">
          <img src={assets.Logo} className="mb-5 w-32" alt="" />
          <p className="md:w-2/3 text-gray-200 text-center">
            ارسال به سراسر تربت حیدریه و مشهد
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 text-white">مجموعـــــــه</p>
          <ul className="flex flex-col gap-1 text-gray-200">
            <NavLink to="/" className="flex flex-col items-center gap-1">
              <p>صفحه اصلی</p>
            </NavLink>
            <NavLink
              to="/collection"
              className="flex flex-col items-center gap-1"
            >
              <p>محصولات</p>
            </NavLink>
            <NavLink to="/about" className="flex flex-col items-center gap-1">
              <p>درباره ما</p>
            </NavLink>
            <NavLink to="/contact" className="flex flex-col items-center gap-1">
              <p>ارتباط با ما</p>
            </NavLink>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 text-white text-center">
            راه های ارتباطی
          </p>
          <ul className="flex flex-col sm:items-end items-center gap-1 text-gray-200 ">
            <li className="flex justify-start items-center ">
              0904-443-1358
              <span>
                <i class="fa-solid fa-phone-volume text-md mr-3"></i>
              </span>
            </li>
            <li className="h-10">
              <span className="cursor-pointer flex justify-start items-center">
                <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.instagram.com/zahra_jomehzadeh_2/&ved=2ahUKEwiC6paNm-OJAxUul-4BHbwLIkEQjjh6BAgiEAE&usg=AOvVaw3-lM_pbTbKthqwVD7qqfVq">
                  zahra_jomehzadeh_2@
                </a>
                <i class="fa-brands fa-instagram text-lg mt-3 mr-2"></i>
              </span>
            </li>
            <li className="h-10">
              <span className="flex justify-start items-center">
                Z_Jomehzadeh@
                <i class="fa-brands fa-telegram text-lg mt-2 mr-2"></i>
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
