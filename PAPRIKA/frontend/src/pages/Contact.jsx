import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"ارتباط"} text2={"با ما"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={assets.contactImg}
          alt="contact image"
          className="md:max-w-[480px] rounded-xl overflow-hidden min-w-fit"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="text xl text-white">فروشگاه ما</p>
          <p className="text-gray-200 flex justify-between">
            <span className="mr-5">
              <img src={assets.locationIcon} alt="" className="w-5" />
            </span>
            بین مظفریه 38 و 36
          </p>
          <p className="text-gray-200 flex justify-between">
            <span className="mr-5">
              <img src={assets.phoneIcon} alt="" className="w-5" />
            </span>
            09150707303
          </p>
          <p className="text-gray-200 flex justify-between">
            <span className="mr-5">
              <img src={assets.telegramIcon} alt="" className="w-5" />
            </span>
            @zahra_jomehzadeh_2
          </p>

          <p className="text-xl text-white">تخفیف اشتراک</p>
          <p className="text-gray-300">
            با فالو کردن پیج اینستاگرام پاپریکا از اخبار و تخفیفات ما برخوردار
            شوید
          </p>
          <button className="border border-baseColorRed px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 text-white">
            صفحه اینستاگرام
          </button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
