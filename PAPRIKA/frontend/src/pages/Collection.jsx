import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };
  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 pt-10 border-t">
      {/* Filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2 text-white"
        >
          دسته بندی محصولات :
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.DropdownIcon}
            alt=""
          />
        </p>
        {/* Category Filter */}
        <div
          className={`border w-[95%] border-baseColorRed pr-5 py-3 mt-6 rounded-md bg-white ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium text-baseColorRed">
            دسته بندی
          </p>
          <div className="flex flex-col gap-2 text-sm font-light text-black">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"sosis"}
                onChange={toggleCategory}
              />
              انواع سوسیس
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"kalbas"}
                onChange={toggleCategory}
              />{" "}
              انواع کالباس و ژامبون
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"hamburger"}
                onChange={toggleCategory}
              />{" "}
              انواع همبرگر و ناگت
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div
          className={`border w-[95%] border-baseColorRed pr-5 py-3 mt-6 rounded-md bg-white ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium text-baseColorRed">نوع</p>
          <div className="flex flex-col gap-2 text-sm font-light text-black">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"gooshti"}
                onChange={toggleSubCategory}
              />
              گوشتی
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"morghi"}
                onChange={toggleSubCategory}
              />{" "}
              مرغی
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"saier"}
                onChange={toggleSubCategory}
              />{" "}
              سایر موارد
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"همه ی"} text2={"محصولات"} />
          {/* Product Sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-baseColorRed rounded-md text-[10px] md:text-sm px-2 "
          >
            <option value="relavent">مرتب سازی براساس : مرتبط</option>
            <option value="low-high">
              مرتب سازی براساس : قیمت پایین به بالا
            </option>
            <option value="high-low">
              مرتب سازی براساس : قیمت بالا به پایین
            </option>
          </select>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
