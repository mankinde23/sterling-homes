import Image from "next/image";
import Aboutus from "./component/aboutUs/aboutus";
import Ourservice from "./component/ourServices/ourservice";
import Testimonial from "./component/testimonial/testimonial";
import Founders from "./component/founders/founder";
import Contact from "./component/contact/contact";
import Footer from "./component/footer/footer";
import Navbar from "./component/navbar/navbar";
import Link from "next/link";
import Hero from "./component/hero/hero";

export default function Home() {
  return (
    <>
      <div className="sm:hidden lg:hidden 2xl:block 2xl-max:block">
        <Navbar />

        <div className="w-full " id="hero">
          <Hero />
        </div>

        <div className="w-full " id="about">
          <Aboutus />
        </div>
        <div className="" id="services">
          <Ourservice />
        </div>
        <div className="" id="testimonials">
          <Testimonial />
        </div>
        <div>
          <Founders />
        </div>
        <div className="" id="contact">
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </div>

      {/* TAB */}

      {/* <div className="sm:hidden 2xl:hidden 2xl-max:hidden xl:hidden lg:block  md:block">
        <Navbar />
        <div className="w-full " id="heromm">
          <Hero />
        </div>

        <div className="w-full scroll-mt-[3.5rem] " id="aboutmm">
          <Aboutus />
        </div>
        <div className="w-full scroll-mt-[3.5rem]" id="servicesmm">
          <Ourservice />
        </div>
        <div className="w-full scroll-mt-[3rem]" id="testimonialsmm">
          <Testimonial />
        </div>
        <div>
          <Founders />
        </div>
        <div className="w-full scroll-mt-[5rem]" id="contactmm">
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </div> */}

      {/* MOBILE */}

      <div className="2xl:hidden 2xl-max:hidden xl:hidden lg:block sm:block md:block ">
        <Navbar />

        <div className="w-full " id="herom">
          <Hero />
        </div>

        <div className="w-full scroll-mt-[3.5rem]" id="aboutm">
          <Aboutus />
        </div>
        <div className="w-full scroll-mt-[3.5rem]" id="servicesm">
          <Ourservice />
        </div>
        <div className="w-full scroll-mt-[3rem]" id="testimonialsm">
          <Testimonial />
        </div>
        <div className="w-full">
          <Founders />
        </div>
        <div className="w-full scroll-mt-[-13rem]" id="contactm">
          <Contact />
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </>
  );
}
