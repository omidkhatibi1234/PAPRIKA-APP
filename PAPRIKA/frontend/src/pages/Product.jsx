import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* -------- Product Data -----------*/}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* -------- Product Images -----------*/}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                src={item}
                onClick={() => setImage(item)}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer rounded-md"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto rounded-md" alt="" />
          </div>
        </div>

        {/* ---------- Product INFO ---------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2 text-white">
            {productData.name}
          </h1>
          <div className="flex item-center gap-0.25 mt-2">
            <img src={assets.starIcon} alt="" className="w-5 h-5" />
            <img src={assets.starIcon} alt="" className="w-5 h-5" />
            <img src={assets.starIcon} alt="" className="w-5 h-5" />
            <img src={assets.starIcon} alt="" className="w-5 h-5" />
            <img src={assets.emptyStarIcon} alt="" className="w-5 h-5" />
            <p className="pr-2 text-[#eab308]">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium text-baseColorRed">
            {productData.price} {currency}
          </p>
          <p className="mt-5 text-gray-300 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8 ">
            <p className="text-white">انتخاب وزن</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border rounded-sm py-2 px-4 bg-gray-100 ${
                    item === size ? "border-red-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-baseColorRed rounded-md text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            اضافه به سبد خرید
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-300 mt-5 flex flex-col gap-1">
            <p>محصولات کاملا طبیعی و ارگانیک می باشند 100%</p>
            <p>بدون مواد افزودنی و شیمیایی</p>
          </div>
        </div>
      </div>
      {/* ---------Description & Review Section --------- */}
      <div className="mt-20">
        <div className="flex text-white">
          <b className="border px-5 py-3 text-sm">توضیحات</b>
          <p className="border px-5 py-3 text-sm">نظرات (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            possimus hic dolores voluptatem. At tempore quod adipisci eaqueores
            voluptatem. At tempore quod adipisci eaque
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam eaque
            animi, nobis repellendus at sunt quod ad nulla, repudiandae numq
          </p>
        </div>
      </div>
      {/* -------- display related products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
