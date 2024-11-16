import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="text-white m-auto">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#cd3726"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Spinner;
