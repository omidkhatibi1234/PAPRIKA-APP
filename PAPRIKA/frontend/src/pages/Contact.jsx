import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"ارتباط"} text2={"با ما"} />
      </div>
      <div className=" flex flex-col justify-between text-white items-center md:flex-row my-5">
        <div className="w-full md:w-1/2">
          <img
            src={assets.contactImg}
            alt="contact image"
            className="w-full rounded-xl overflow-hidden"
          />
        </div>
        <div className=" w-full md:w-1/2 px-16 py-5">
          <div className="mb-10">
            <h3 className="mb-3">راه های ارتباطی :</h3>
            <div className="flex flex-col justify-center items-start my-2">
              <span>
                <i class="fa-solid fa-phone text-white ml-3"></i>
                0904-443-1358
              </span>
              <span>
                <i class="fa-brands fa-telegram text-xl ml-3"></i>
                zahra_jomehzadeh_2@
              </span>
            </div>
          </div>
          <div>
            <h3 className="mb-3">تخفیف اشتراک :</h3>
            <p className="text-sm my-5">
              با فالو کردن پیج اینستاگرام پاپریکا از اخبار و تخفیفات ما برخوردار
              شوید.
            </p>
            <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.instagram.com/zahra_jomehzadeh_2/&ved=2ahUKEwiC6paNm-OJAxUul-4BHbwLIkEQjjh6BAgiEAE&usg=AOvVaw3-lM_pbTbKthqwVD7qqfVq">
              <button className="border border-baseColorRed px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 text-white">
                صفحه اینستاگرام
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={assets.contactImg}
          alt="contact image"
          className="md:w-[600px] w-[300px] rounded-xl overflow-hidden"
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
              <i class="fa-brands fa-phone text-xl mx-3"></i>
            </span>
            0904-443-1358
          </p>
          <p className="text-gray-200 flex justify-between items-center">
            <i class="fa-brands fa-telegram text-xl mx-3"></i>
            zahra_jomehzadeh_2@
          </p>

          <p className="text-xl text-white">تخفیف اشتراک</p>
          <p className="text-gray-300">
            با فالو کردن پیج اینستاگرام پاپریکا از اخبار و تخفیفات ما برخوردار
            شوید
          </p>

          <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.instagram.com/zahra_jomehzadeh_2/&ved=2ahUKEwiC6paNm-OJAxUul-4BHbwLIkEQjjh6BAgiEAE&usg=AOvVaw3-lM_pbTbKthqwVD7qqfVq">
            <button className="border border-baseColorRed px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 text-white">
              صفحه اینستاگرام
            </button>
          </a>
        </div>
      </div> */}

      <NewsletterBox />
    </div>
  );
};

export default Contact;
