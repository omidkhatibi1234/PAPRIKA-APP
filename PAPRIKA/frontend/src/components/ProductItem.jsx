import { memo, useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const ProductItem = memo(({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      className=" cursor-pointer rounded-lg bg-white overflow-hidden"
    >
      <img
        src={image[0]}
        alt="product image"
        className="hover:scale-110 transition ease-in-out w-full h-[300px]"
      />
      <div className="flex flex-row-reverse justify-between items-center px-5 py-5">
        <p className="text-sm font-medium text-black">
          {price} {currency}
        </p>
        <p className="text-md font-bold text-baseColorRed">{name}</p>
      </div>
    </Link>
  );
});

export default ProductItem;
