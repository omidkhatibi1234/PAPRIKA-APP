const NewsletterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-white">خبرنامه</p>
      <p className="text-gray-100 mt-3">
        در صورت تمایل به اطلاع از جدید ترین اخبار مجموعه پاپریکا، خرسندیم با شما
        در ارتباط باشیم
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 rounded-md mx-auto overflow-hidden my-6 border pr-3 bg-white"
      >
        <input
          className="w-full sm:flex-1 outline-none text-black bg-transparent "
          type="email"
          placeholder="ایمیل خود را وارد نمایید"
          required
        />
        <button
          type="submit"
          className="bg-baseColorRed text-white text-xs px-10 py-4 font-bold"
        >
          مشترک شوید
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
