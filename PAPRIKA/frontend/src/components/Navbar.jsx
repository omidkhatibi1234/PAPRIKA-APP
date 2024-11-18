import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets.js";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext.jsx";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  // ------عملیات زیر برای حذف همبرگر منو به محض اسکرول کاربر می باشد-------
  const handleScroll = () => {
    setVisible(false);
  };

  useEffect(() => {
    // اضافه کردن لیسنر اسکرول
    window.addEventListener("scroll", handleScroll);

    // پاک کردن لیسنر هنگام خلاصه شدن کامپوننت
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex items-center justify-between py-5 font-medium ">
      <div className="flex flex-row-reverse items-center gap-6">
        <i class="fa-solid fa-magnifying-glass text-white"></i>
        <div className="group relative">
          <i class="fa-solid fa-user text-white"></i>

          {/* Dropdown Menu */}
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-baseColorRed text-white rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-black"
                >
                  Orders
                </p>
                <p
                  onClick={() => logout()}
                  className="cursor-pointer hover:text-black"
                >
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to="/cart" className="relative">
          <i class="fa-solid fa-cart-shopping text-white"></i>
          <p className="absolute right-[-10px] bottom-[-10px] w-4 text-center leading-4 bg-baseColorRed text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        {/* <img
          onClick={() => setVisible(true)}
          src={assets.MenuIcon}
          className="w-5 sm:hidden cursor-pointer"
          alt=""
        /> */}
        <i
          onClick={() => setVisible(true)}
          class="fa-solid fa-bars text-white text-xl sm:hidden cursor-pointer"
        ></i>
      </div>
      {/* Sidebar menu for small screens */}
      <div
        className={` overflow-hidden bg-gray-600 transition-all z-50 fixed top-0 right-0 bottom-0 ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-white pt-3 px-10">
          <div
            onClick={() => setVisible(false)}
            className="flex justify-end items-center gap=4 p-3 cursor-pointer bg-gray-900"
          >
            <p className="text-white ml-2">بازگشت</p>
            <i class="fa-solid fa-arrow-left"></i>
          </div>
          <NavLink
            to="/"
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b block text-center"
          >
            خانه
          </NavLink>
          <NavLink
            to="/collection"
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b block text-center"
          >
            محصولات
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b block text-center"
          >
            درباره ما
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setVisible(false)}
            className="py-2 pl-6 block text-center"
          >
            ارتباط با ما
          </NavLink>
        </div>
      </div>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>صفحه اصلی</p>
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>محصولات</p>
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>درباره ما</p>
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>ارتباط با ما</p>
        </NavLink>
      </ul>
      <Link to="/" className="flex justify-between items-center">
        {/* <img src={assets.LogoShape} className="w-10" alt="" />
        <img src={assets.LogoText} className="w-28" alt="" /> */}
        <img
          src={assets.navbarLogo}
          alt="navbar logo image"
          className="sm:w-36 w-32"
        />
      </Link>
    </div>
  );
};

export default Navbar;
