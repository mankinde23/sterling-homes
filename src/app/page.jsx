import Image from "next/image";
import Aboutus from "./component/aboutUs/aboutus";
import Ourservice from "./component/ourServices/ourservice";
import Testimonial from "./component/testimonial/testimonial";
import Founders from "./component/founders/founder";

export default function Home() {
  return (
    <>
      <div
        className="bg-cover h-[57.3125rem] w-auto bg-light-gray bg-no-repeat flex-shrink-0  scale-100 "
        style={{
          backgroundImage: "url('/landing-img2.png')",
        }}
        id="hero"
      >
        <div className="flex justify-center items-end ">
          <div className=" mt-[19.88rem]">
            <h1 className="text-nav-text font-ameretto text-[4.6875rem] leading-normal tracking-[0.9375rem] font-normal">
              STERLING HOMES
            </h1>
            <p className="flex justify-center items-center text-nav-text text-[0.8125rem] font-light">
              Building dreams, one home at a time, with integrity and excellence
            </p>
            <div className="flex justify-center items-center mt-[4rem]">
              <button className="w-[11.9375rem] h-[2.875rem] p-[0.5rem] gap-[0.5rem] bg-sterling-theme">
                <p className="text-nav-text text-[1rem] font-semibold leading-normal">
                  View Catalogue
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Aboutus />
      </div>
      <div>
        <Ourservice />
      </div>
      <div>
        <Testimonial />
      </div>
      <div>
        <Founders />
      </div>
    </>
  );
}
