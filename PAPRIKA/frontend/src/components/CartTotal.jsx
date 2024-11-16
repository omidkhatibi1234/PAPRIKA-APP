import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"مجموعه"} text2={"خرید شما"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm text-gray-200">
        <div className="flex flex-row justify-between ">
          <p>هزینه محصول</p>
          <p>
            {getCartAmount()}.00 {currency}
          </p>
        </div>
        <hr />
        <div className="flex flex-row justify-between ">
          <p>هزینه ارسال</p>
          <p>
            {getCartAmount()}.00 {currency}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>مجموع کل</b>
          <b>
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00{" "}
            {currency}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
