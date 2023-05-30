import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { sidedata } from "../components/Slide/Slidedata";

// Import Swiper styles

// import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function Slider() {
  return (
    <div className="mt-[60px] mb-[72px]">
      <Swiper
        slidesPerView={3.5}
        centeredSlides={true}
        spaceBetween={24}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="mySwiper "
      >
        {sidedata.map((items, index) => (
          <div key={index} className="">
            <SwiperSlide>
              <div className=" bg-[#D9D9D9] w-[400px] h-[400px]">{items}</div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}
