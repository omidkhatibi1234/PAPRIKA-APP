import React from "react";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Spinner from "./components/Spinner";
import SpinnerFullPage from "./components/SpinnerFullPage";

// import Collection from "./pages/Collection";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Product from "./pages/Product";
// import Cart from "./pages/Cart";
// import Login from "./pages/Login";
// import PlaceOrder from "./pages/PlaceOrder";
// import Orders from "./pages/Orders";
// import Home from "./pages/Home";

const Collection = React.lazy(() => import("./pages/Collection"));
const Contact = React.lazy(() => import("./pages/Contact"));
const About = React.lazy(() => import("./pages/About"));
const Product = React.lazy(() => import("./pages/Product"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Login = React.lazy(() => import("./pages/Login"));
const PlaceOrder = React.lazy(() => import("./pages/PlaceOrder"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Home = React.lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <div className="px-4 sm:px=[5vw] md:px-[7vw] lg:px=[9vw]">
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <React.Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </React.Suspense>
      <Footer />
    </div>
  );
};

export default App;
