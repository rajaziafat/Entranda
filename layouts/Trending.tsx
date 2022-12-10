import Bar from "components/Bar";
import TrendingCard from "components/TrendingCard";
import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import Slider from "components/Slider";

function Trending() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <div className="container">
        <div className="mb-8 sm:mb-12">
          <Bar
            prevButton={prevRef}
            nextButton={nextRef}
            title="Trending 2020"
            subtitle="Sost Brilliant reasons Entrada should be your one-stop-shop!"
          />
        </div>
      </div>
      <div className="ml-[7vw]">
        <Slider
          slidesPerView={3.5}
          spaceBetween={30}
          prevRef={prevRef}
          nextRef={nextRef}
          breakpoints={{
            200: {
              slidesPerView: 1.2,
            },
            480: {
              slidesPerView: 1.7,
            },
            560: {
              slidesPerView: 2,
            },
            700: {
              slidesPerView: 2.5,
            },
            1280: {
              slidesPerView: 3.5,
            },
          }}
        >
          <SwiperSlide>
            <TrendingCard img="images/trending-img-1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <TrendingCard img="images/trending-img-2.png" />
          </SwiperSlide>
          <SwiperSlide>
            <TrendingCard img="images/trending-img-3.png" />
          </SwiperSlide>
          <SwiperSlide>
            <TrendingCard img="images/trending-img-1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <TrendingCard img="images/trending-img-2.png" />
          </SwiperSlide>
          <SwiperSlide>
            <TrendingCard img="images/trending-img-3.png" />
          </SwiperSlide>
        </Slider>
      </div>
    </div>
  );
}

export default Trending;
