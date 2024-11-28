import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const backToUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="flex flex-col gap-10 justify-around items-center my-10 mt-40 text-sm sm:flex-row-reverse">
        <div className="flex flex-col justify-center items-center">
          <img src={assets.footerLogo} className="mb-5 w-32" alt="" />
          <p className="md:w-2/3 text-gray-200 text-center">
            ارسال به سراسر تربت حیدریه و مشهد
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 text-white">مجموعـــــــه</p>
          <ul className="flex flex-col gap-1 text-gray-200">
            <NavLink
              onClick={() => {
                backToUp();
              }}
              to="/"
              className="flex flex-col items-right gap-1"
            >
              <p>
                <i class="fa-solid fa-house ml-2"></i>
                صفحه اصلی
              </p>
            </NavLink>
            <NavLink
              onClick={() => {
                backToUp();
              }}
              to="/collection"
              className="flex flex-col items-right gap-1"
            >
              <p>
                <i class="fa-solid fa-drumstick-bite ml-2"></i>
                محصولات
              </p>
            </NavLink>
            <NavLink
              onClick={() => {
                backToUp();
              }}
              to="/about"
              className="flex flex-col items-right gap-1"
            >
              <p>
                <i class="fa-regular fa-face-smile-wink ml-2"></i>
                درباره ما
              </p>
            </NavLink>
            <NavLink
              onClick={() => {
                backToUp();
              }}
              to="/contact"
              className="flex flex-col items-right gap-1"
            >
              <p>
                <i class="fa-regular fa-id-badge ml-2"></i>
                ارتباط با ما
              </p>
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
            <div className="flex justify-around items-center mt-5 w-full">
              <li className="h-10">
                <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.instagram.com/zahra_jomehzadeh_2/&ved=2ahUKEwiC6paNm-OJAxUul-4BHbwLIkEQjjh6BAgiEAE&usg=AOvVaw3-lM_pbTbKthqwVD7qqfVq">
                  <i class="fa-brands fa-instagram text-3xl "></i>
                </a>
              </li>
              <li className="h-10">
                <i class="fa-brands fa-telegram text-3xl "></i>
              </li>
            </div>
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
