import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../../assets/nav6.jpeg';
import img2 from '../../assets/nav7.jpeg';
import img3 from '../../assets/nav8.jpeg';

const images = [img1, img2, img3];

export default function HeroCarousel() {
  return (
    <div className="w-full max-w-[1280px] mx-auto overflow-hidden rounded-xl shadow-md mt-4">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{ clickable: true }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
              <img
                src={img}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
