import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Navigation, SwiperOptions } from "swiper";
SwiperCore.use([Navigation]);

interface Props {
  slidesPerView: number;
  spaceBetween: number;
  breakpoints?: any;
  children: any;
  prevRef: any;
  nextRef: any;
  options?: SwiperOptions;
}

function Slider(props: Props) {
  return (
    <Swiper
      {...props.options}
      slidesPerView={props.slidesPerView}
      spaceBetween={props.spaceBetween}
      modules={[Navigation]}
      navigation={{
        prevEl: props.prevRef.current,
        nextEl: props.nextRef.current,
      }}
      onSwiper={(swiper) => {
        setTimeout(() => {
          if (swiper.params) {
            // @ts-ignore
            swiper.params.navigation.prevEl = props.prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = props.nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        });
      }}
      breakpoints={props.breakpoints}
    >
      {props.children}
    </Swiper>
  );
}

export default Slider;
