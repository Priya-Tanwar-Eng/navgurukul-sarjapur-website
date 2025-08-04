import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import avatar from "../../assets/avatar.jpg"; 
import { FaQuoteLeft } from 'react-icons/fa'; 

const testimonials = [
  {
    name: "Komal Shukla",
    position: "Frontend Developer @Google",
    des: "Navgurukul truly changed my life! I started with no coding experience and now I'm thriving in a top tech company. The practical learning approach and supportive environment were incredible.",
    Image: avatar,
  },
  {
    name: "Riya Sharma",
    position: "Backend Engineer @Microsoft", 
    des: "The community at Navgurukul, the dedicated mentors, and the meticulously crafted curriculum helped me to dream bigger and achieve more than I ever thought possible. A life-changing experience.",
    Image: avatar,
  },
  {
    name: "Ankit Gupta",
    position: "Fullstack Developer @Infosys",
    des: "The project-based learning at Navgurukul prepared me perfectly for the industry. I gained confidence and essential skills that employers truly value. Highly recommend!",
    Image: avatar,
  },
  {
    name: "Pooja Devi",
    position: "Data Analyst @TCS", 
    des: "Navgurukul provides not just education, but a complete ecosystem for growth. The focus on self-learning and real-world problems was instrumental in my career transition.",
    Image: avatar,
  },
];

export default function Testimonials() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
        What Our Placed Students Say...
      </h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3, 
          },
        }}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white shadow-xl p-8 rounded-xl border border-gray-100 hover:shadow-2xl transition duration-300 ease-in-out h-full flex flex-col justify-between">
              {/* <div className="text-blue-500 text-4xl mb-4">
                <FaQuoteLeft />
              </div> */}
              <p className="italic text-gray-700 text-lg leading-relaxed flex-grow">“{t.des}”</p>
              <div className="mt-6 flex items-center">
                <img
                  src={t.Image}
                  alt={t.name}
                  className="h-16 w-16 rounded-full object-cover border-2 border-blue-400 mr-4"
                />
                <div>
                  <div className="font-bold text-lg text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-600">{t.position}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

