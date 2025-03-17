import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import images
import img3 from "../Images/img-3.webp";
import img5 from "../Images/img-5.webp";
import img6 from "../Images/img-6.webp";
import img7 from "../Images/img-7.webp";
import img8 from "../Images/img-8.webp";

const services = [
  { name: "Women's Salon & Spa", icon: "💆‍♀️" },
  { name: "Men's Salon & Massage", icon: "💆‍♂️" },
  { name: "AC & Appliance Repair", icon: "❄️" },
  { name: "Cleaning", icon: "🧹" },
  { name: "Electrician, Plumber & Carpenter", icon: "🔧" },
  { name: "Native Water Purifier", icon: "💧" },
  { name: "Native Smart Locks", icon: "🔐" },
  { name: "Full home painting", icon: "🎨" },
];

const images = [img3, img5, img6, img7, img8];

const Home = () => {
  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex flex-row h-full">
        <div className="flex-1 p-4">
          <div>
            <h1 className="text-4xl font-medium text-black ml-[8rem] mt-7">
              Home services at your doorstep
            </h1>
          </div>
          <div className="w-[30rem] p-6 border border-gray-300 rounded-lg mt-10 ml-[8rem]">
            <h3 className="text-gray-700 text-2xl font-medium mb-6">
              What are you looking for?
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg shadow-sm transition duration-300 hover:bg-gray-200 hover:shadow-md cursor-pointer"
                >
                  <span className="text-3xl mb-2">{service.icon}</span>
                  <span className="text-sm text-gray-700 text-center">
                    {service.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 text-white p-4">
          <img
            style={{ width: "39rem", height: "38rem" }}
            className="rounded-lg mt-7"
            src="src/Images/imgh-1.webp"
            alt="Description of image"
          />
        </div>
      </div>
      <div className="w-full h-[400px] flex ml-10 mr-10 mt-10">
        <div className="relative w-full max-w-4xl">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop
          >
            {images.map((img, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="p-2 w-auto h-auto">
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className=" object-contain rounded-xl shadow-lg"
                    style={{ width: "800px", height: "300px" }} // Inline styles for testing
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Left Button */}
          <button className="swiper-button-prev absolute top-1/2 left-0 z-10 p-3 bg-gray-700 text-white rounded-full transform -translate-y-1/2">
            <FaArrowLeft size={20} />
          </button>
          {/* Right Button */}
          <button className="swiper-button-next absolute top-1/2 right-0 z-10 p-3 bg-gray-700 text-white rounded-full transform -translate-y-1/2">
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
