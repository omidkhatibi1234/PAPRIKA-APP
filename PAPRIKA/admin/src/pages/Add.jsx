import { useState } from "react";
import axios from "axios";

import { assets } from "../assets/assets";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("sosis");
  const [subCategory, setSubCategory] = useState("gooshti");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-3"
    >
      <div>
        <p className="mb-2">آپلود تصویر</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img
              className="w-20"
              src={!image1 ? assets.uploadArea : URL.createObjectURL(image1)}
              alt=""
            />
            <input
              type="file"
              onChange={(e) => setImage1(e.target.files[0])}
              id="image1"
              hidden
            />
          </label>
          <label htmlFor="image2">
            <img
              className="w-20"
              src={!image2 ? assets.uploadArea : URL.createObjectURL(image2)}
              alt=""
            />
            <input
              type="file"
              onChange={(e) => setImage2(e.target.files[0])}
              id="image2"
              hidden
            />
          </label>
          <label htmlFor="image3">
            <img
              className="w-20"
              src={!image3 ? assets.uploadArea : URL.createObjectURL(image3)}
              alt=""
            />
            <input
              type="file"
              onChange={(e) => setImage3(e.target.files[0])}
              id="image3"
              hidden
            />
          </label>
          <label htmlFor="image4">
            <img
              className="w-20"
              src={!image4 ? assets.uploadArea : URL.createObjectURL(image4)}
              alt=""
            />
            <input
              type="file"
              onChange={(e) => setImage4(e.target.files[0])}
              id="image4"
              hidden
            />
          </label>
        </div>
      </div>
      <div className="w-full">
        <p className="mb-2">اسم محصول</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="اینجا بنویسید"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">توضیحات محصول</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="محتوا را اینجا بنویسید"
          required
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">دسته بندی محصول</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="w-full px-3 py-2"
          >
            <option value="sosis">سوسیس</option>
            <option value="kalbas">کالباس</option>
            <option value="hamburger">همبرگر و ناگت</option>
          </select>
        </div>
        <div>
          <p className="mb-2">نوع</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            value={subCategory}
            className="w-full px-3 py-2"
          >
            <option value="gooshti">گوشتی</option>
            <option value="morghi">مرغی</option>
            <option value="saier">سایر</option>
          </select>
        </div>
        <div>
          <p className="mb-2">قیمت محصول</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-full px-3 py-2 sm:w-[120px]"
            type="number"
            placeholder="25"
          />
        </div>
      </div>
      <div>
        <p className="mb-2">وزن های محصول</p>
        <div className="flex gap-3">
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("250")
                  ? prev.filter((item) => item !== "250")
                  : [...prev, "250"]
              )
            }
          >
            <p
              className={`${
                sizes.includes("250") ? "bg-pink-100" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              250
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("500")
                  ? prev.filter((item) => item !== "500")
                  : [...prev, "500"]
              )
            }
          >
            <p
              className={`${
                sizes.includes("500") ? "bg-pink-100" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              500
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("750")
                  ? prev.filter((item) => item !== "750")
                  : [...prev, "750"]
              )
            }
          >
            <p
              className={`${
                sizes.includes("750") ? "bg-pink-100" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              750
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("1000")
                  ? prev.filter((item) => item !== "1000")
                  : [...prev, "1000"]
              )
            }
          >
            <p
              className={`${
                sizes.includes("1000") ? "bg-pink-100" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              1000
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <input
          type="checkbox"
          id="bestseller"
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
        />
        <label className="cursor-pointer" htmlFor="bestseller">
          اضافه به پرفروش ترین ها
        </label>
      </div>

      <button
        className="w-28 py-3 mt-4 bg-black text-white rounded-sm"
        type="submit"
      >
        اضافه
      </button>
    </form>
  );
};

export default Add;
