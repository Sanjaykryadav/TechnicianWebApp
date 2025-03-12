import React, { useState } from "react";
import HomeSlider from "../components/HomeSlider";
import HomeStats from "../components/HomeStats";

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

const Home = () => {
  return (
    <div className="flex flex-col bg-white p-10">
      {/* Hero */}
      <div>
        <div className="flex flex-row h-full">
          <div className="flex-1">
            <div>
              <h1 className="text-4xl font-medium text-black mt-4">
                Home services at your
                <br />
                doorstep
              </h1>
            </div>
            <div className="w-[80%] p-6 border border-gray-300 rounded-lg mt-10 ">
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
          <div className="flex-1 text-white">
            <img
              className="rounded-lg h-[100vh]"
              src="src/Images/imgh-1.webp"
              alt="Description of image"
            />
          </div>
        </div>
      </div>
      {/* Stats */}
      <div className="py-8">
        <HomeStats />
      </div>
      {/* Slider */}
      <div>
        <HomeSlider />
      </div>
    </div>
  );
};

export default Home;
