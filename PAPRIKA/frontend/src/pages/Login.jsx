import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [currentState, setCurrentState] = useState("ورود");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currentState === "ثبت نام") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl text-white">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-white" />
      </div>
      {currentState === "ورود" ? (
        ""
      ) : (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
          type="text"
          className="w-full px-3 py-2 border border-gray-800 rounded-md"
          placeholder="نام"
        />
      )}
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
        type="email"
        className="w-full px-3 py-2 border border-gray-800 rounded-md"
        placeholder="شماره تماس"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
        type="password"
        className="w-full px-3 py-2 border border-gray-800 rounded-md"
        placeholder="رمزعبور"
      />
      <div className="w-full flex justify-between text-sm mt-[-8px] text-gray-300">
        <p className="cursor-pointer">رمز عبور خود را فراموش کردید؟</p>
        {currentState === "ورود" ? (
          <p
            className="cursor-pointer"
            onClick={() => setCurrentState("ثبت نام")}
          >
            ساخت اکانت کاربری
          </p>
        ) : (
          <p className="cursor-pointer" onClick={() => setCurrentState("ورود")}>
            ورود از اینجا
          </p>
        )}
      </div>
      <button className="bg-baseColorGreen rounded-md text-white font-light px-8 py-2 mt-4">
        {currentState === "ورود" ? "ورود کاربر" : "ثبت نام"}
      </button>
    </form>
  );
};

export default Login;
