import React, { useState } from "react";

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      backgroundImage:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1741340956111-ec1c59.jpeg",
    },
    {
      id: 2,
      backgroundImage:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1741340956111-ec1c59.jpeg",
    },
    {
      id: 3,
      backgroundImage:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1741340956111-ec1c59.jpeg",
    },
    {
      id: 4,
      backgroundImage:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1741340956111-ec1c59.jpeg",
    },
    {
      id: 5,
      backgroundImage:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1741340956111-ec1c59.jpeg",
    },
    {
      id: 6,
      backgroundImage:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1741340956111-ec1c59.jpeg",
    },
  ];

  const slidesPerView = 3;
  const totalSlides = slides.length;
  const maxSlideIndex = Math.ceil(totalSlides / slidesPerView) - 1;

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const newSlide = prev + 1;
      return newSlide > maxSlideIndex ? 0 : newSlide;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const newSlide = prev - 1;
      return newSlide < 0 ? maxSlideIndex : newSlide;
    });
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`,
        }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={`flex-none w-1/${slidesPerView} px-2`}>
            <div className="relative w-full h-64 rounded-xl shadow-lg overflow-hidden bg-cover bg-center">
              <img src={`${slide.backgroundImage}`} alt="Slider Img" />
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white  rounded-full p-2 text-gray-800 outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 text-gray-800 outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default HomeSlider;
