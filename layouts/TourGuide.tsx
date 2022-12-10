import Bar from "components/Bar";
import TourGuideCard from "components/TourGuideCard";
import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import Slider from "components/Slider";
import dynamic from "next/dynamic";

function TourGuide() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <div className="container">
        <div className="mb-8 md:mb-12 ">
          <Bar
            title="Tour Guides"
            subtitle="Sost Brilliant reasons Entrada should be your one-stop-shop!"
            nextButton={nextRef}
            prevButton={prevRef}
          />
        </div>
      </div>

      <div className="ml-[7vw]">
        <Slider
          slidesPerView={1}
          spaceBetween={40}
          prevRef={prevRef}
          nextRef={nextRef}
          options={{
            loop: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 1.3,
            },
          }}
        >
          <SwiperSlide>
            <TourGuideCard cardIndex="01" img="images/tour-guide.png" />
          </SwiperSlide>
          <SwiperSlide>
            <TourGuideCard cardIndex="02" img="images/tour-guide.png" />
          </SwiperSlide>
          <SwiperSlide>
            <TourGuideCard cardIndex="03" img="images/tour-guide.png" />
          </SwiperSlide>
        </Slider>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(TourGuide), {
  ssr: false,
});
