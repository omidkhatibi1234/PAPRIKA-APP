import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-l-2">
      <div className="flex flex-col gap-4 pt-6 pr-[20%] text-[15px]">
        <NavLink
          to="/add"
          className="flex items-center gap-3 border border-gray-300 border-l-0 px-3 py-2 rounded-r"
        >
          <img src={assets.addIcon} alt="" className="w-5 h-5" />
          <p className="hidden md:block">اضافه کردن آیتم</p>
        </NavLink>
        <NavLink
          to="/list"
          className="flex items-center gap-3 border border-gray-300 border-l-0 px-3 py-2 rounded-r"
        >
          <img src={assets.orderIcon} alt="" className="w-5 h-5" />
          <p className="hidden md:block">لیست آیتم ها</p>
        </NavLink>
        <NavLink
          to="/orders"
          className="flex items-center gap-3 border border-gray-300 border-l-0 px-3 py-2 rounded-r"
        >
          <img src={assets.orderIcon} alt="" className="w-5 h-5" />
          <p className="hidden md:block">سفارشات آیتم ها</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
