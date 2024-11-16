const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3 text-white">
      <p className=" font-medium">
        {text1} <span className="">{text2}</span>
      </p>
      <hr className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-white"></hr>
    </div>
  );
};

export default Title;
