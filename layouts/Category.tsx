import Bar from "components/Bar";
import CategoryCard from "components/CategoryCard";
import Slider from "components/Slider";
import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react";

function Category() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div>
      <div className="container">
        <div className="mb-10 sm:mb-14">
          <Bar
            title="Select Category"
            subtitle="Sost Brilliant reasons Entrada should be your one-stop-shop!"
            prevButton={navigationPrevRef}
            nextButton={navigationNextRef}
          />
        </div>
      </div>

      <div className="ml-[7vw]">
        <Slider
          slidesPerView={4.5}
          spaceBetween={30}
          prevRef={navigationPrevRef}
          nextRef={navigationNextRef}
          breakpoints={{
            200: {
              slidesPerView: 1.2,
            },
            400: {
              slidesPerView: 1.7,
            },
            560: {
              slidesPerView: 2.5,
            },
            768: {
              slidesPerView: 3.5,
            },
            1024: {
              slidesPerView: 4.5,
            },
          }}
        >
          <SwiperSlide>
            <CategoryCard
              title="Beach Activity"
              subtitle="196 Activities"
              icon="images/beach-icon.svg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard
              title="Bungee Jump"
              subtitle="196 Activities"
              icon="images/jump-icon.svg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard
              title="City Tours"
              subtitle="196 Activities"
              icon="images/city-icon.svg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard
              title="Hiking Trips"
              subtitle="196 Activities"
              icon="images/hiking-icon.svg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard
              title="Beach Activity"
              subtitle="196 Activities"
              icon="images/beach-icon.svg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard
              title="Bungee Jump"
              subtitle="196 Activities"
              icon="images/jump-icon.svg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard
              title="City Tours"
              subtitle="196 Activities"
              icon="images/city-icon.svg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard
              title="Hiking Trips"
              subtitle="196 Activities"
              icon="images/hiking-icon.svg"
            />
          </SwiperSlide>
        </Slider>
      </div>
    </div>
  );
}

export default Category;
