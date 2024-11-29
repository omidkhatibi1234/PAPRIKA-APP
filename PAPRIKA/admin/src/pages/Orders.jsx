import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
import moment from "moment-jalaali";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    console.log(backendUrl);

    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        {
          orderId,
          status: event.target.value,
        },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div>
      <h3>صفحه سفارش</h3>
      <div>
        {orders.map((order, index) => (
          <div
            className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700"
            key={index}
          >
            <img src={assets.parcelIcon} alt="" className="w-12" />
            <div>
              <div>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return (
                      <p className="py-0.5" key={index}>
                        {item.name} x {item.quantity} عدد
                        <span> {item.size} گرمی</span>
                      </p>
                    );
                  } else {
                    return (
                      <p className="py-0.5" key={index}>
                        {item.name} x {item.quantity} عدد
                        <span> {item.size} گرمی</span> ,
                      </p>
                    );
                  }
                })}
              </div>
              <p className="mt-3 mb-4 font-medium">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div>
                <p className="mb-2">
                  {order.address.city +
                    " , خیابان " +
                    order.address.homeAddress +
                    " , پلاک " +
                    order.address.zipCode}
                </p>
              </div>
              <p>شماره تماس : {order.address.phone}</p>
            </div>
            <div>
              <hr className="md:hidden border-red-900 my-1" />
              <p className="text-sm sm:text-[15px]">
                تعداد محصول : {order.items.length}
              </p>
              <p className="mt-3">شیوه پرداخت : {order.paymentMethod}</p>
              <p className="my-1">
                وضعیت پرداختی : {order.payment ? "پرداخت شد" : "در حال پرداخت"}
              </p>
              {/* <p>تاریخ : {new Date(order.date).toLocaleDateString()}</p> */}
              <p>
                تاریخ :{" "}
                {moment(new Date(order.date).toLocaleDateString()).format(
                  "jYYYY/jM/jD"
                )}
              </p>
            </div>
            <p className="text-sm sm:text-[15px]">
              {order.amount} {currency}
            </p>
            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
              className="p-2 font-semibold"
            >
              <option value="سفارش آماده است">سفارش آماده است</option>
              <option value="درحال بسته بندی">درحال بسته بندی</option>
              <option value="ارسال شد">ارسال شد</option>
              <option value="در مسیر تحویل">درمسیر تحویل</option>
              <option value="تحویل داده شد">تحویل داده شد</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
