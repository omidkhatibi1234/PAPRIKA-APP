import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";
import MyImage from "../components/MyImage";

const About = () => {
  const imageObject = {
    src: assets.IMG_04,
    alt: "",
  };

  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"درباره "} text2={"ما"} />
      </div>
      <div className="my-6 flex flex-col md:flex-row gap-16 relative">
        {/* <img className="w-full md:max-w-[450px]" src={assets.IMG_04} alt="" /> */}
        <div className="w-full md:max-w-[400px] rounded-xl overflow-hidden">
          <MyImage image={imageObject} />
        </div>
        <div className="absolute top-[-40px] md:top-[-100px] left-2 md:16 ">
          <img src={assets.green02Img} className="w-16 md:w-24 xl-32" alt="" />
        </div>

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-200">
          <p>
            مجموعه پاپریکا در حال فعالیت با مدیریت سرکار خانم زهرا جمعه زاده،
            تولید کننده و مدرس تولید انواع محصولات پروتئینی خانگی با بهترین مواد
            و متریال و دارای مدرک فنی بین المللی و 8 سال سابقه ی کار می باشد.
          </p>
          <p>
            در طیف وسیع مواد غذایی ، مواد پرتئینی بعنوان یکی از ترکیبات اصلی
            غذایی ، زمان ماندگاری کوتاه و آسیب پذیری بالاتری نسبت به سایر مواد
            غذایی دارند و تولید فرآورده های پروتئینی نیازمند دقت در رعایت کامل
            موارد و توصیه های بهداشتی و شرایط خاص می باشد هدف مجتمع پروتیینی
            پاپریکا تولید فرآورده های پروتئینی با کیفیت برتر است.
          </p>
          <b className="text-white">هدف ما</b>
          <p>
            هدف ما در مجموعه پاپریکا تولید محصولات پروتئینی با بالاترین کیفیت و
            بهترین طعم و مزه با توجه به سلایق و نظرات شما عزیزان مصرف کننده می
            باشد.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"چرا"} text2={"مارا انتخاب کنید؟"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="boeder px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-white">کیفیت بالا</b>
          <p className="text-gray-300">
            تمامی محصولات پاپریکا با استفاده بروزترین دستگاه های حال حاضر با
            رعایت تمامی نکات بهداشتی تولید می گردند.
          </p>
        </div>
        <div className="boeder px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-white">راحتی در سفارش</b>
          <p className="text-gray-300">
            شما عزیزان میتوانید تمامی محصولات موجود در فروشگاه را به روش های
            گوناگون نظیر ثبت تلفنی،سایت و یا حتی ارتباط با اینستاگرام مجموعه
            پاپریکا، سفارش داده و در سریع ترین حالت ممکن محصولات تازه و ارگانیک
            خود را دریافت نمایید.
          </p>
        </div>
        <div className="boeder px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-white">خدمات استسنائی به مشتریان</b>
          <p className="text-gray-300">
            مجموعه پاپریکا کاملا با توجه به ذائقه غذایی شما و خانواده عزیز شما
            ،هرگونه محصول انتخابی شما را تولید و به دست شما عزیزان دل میرساند.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
