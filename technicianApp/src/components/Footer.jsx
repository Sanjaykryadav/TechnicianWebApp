import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 font-sans text-gray-800 px-12">
      {/* Logo Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Tech Corp</h1>
      </div>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
        {/* Company Section */}
        <div className="mb-8">
          <h3 className="text-md font-bold uppercase mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-gray-800 hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-800 hover:underline">
                Terms & conditions
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-800 hover:underline">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-800 hover:underline">
                Anti-discrimination policy
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-800 hover:underline">
                UC impact
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-800 hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* For Customers Section */}
        <div className="mb-8">
          <h3 className="text-md font-bold uppercase mb-4">For customers</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-gray-800 hover:underline">
                UC reviews
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-800 hover:underline">
                Categories near you
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-800 hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-800 hover:underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* For Partners Section */}
        <div className="mb-8">
          <h3 className="text-md font-bold uppercase mb-4">For partners</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-gray-800 hover:underline">
                Register as a professional
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="mb-8">
          <h3 className="text-md font-bold uppercase mb-4">Social links</h3>
          <div className="flex space-x-3 mb-5">
            <a
              href="#"
              className="border border-gray-300 rounded-full p-2 hover:bg-gray-200"
            >
              <FaTwitter className="text-gray-800 text-lg" />
            </a>
            <a
              href="#"
              className="border border-gray-300 rounded-full p-2 hover:bg-gray-200"
            >
              <FaFacebook className="text-gray-800 text-lg" />
            </a>
            <a
              href="#"
              className="border border-gray-300 rounded-full p-2 hover:bg-gray-200"
            >
              <FaInstagram className="text-gray-800 text-lg" />
            </a>
            <a
              href="#"
              className="border border-gray-300 rounded-full p-2 hover:bg-gray-200"
            >
              <FaLinkedin className="text-gray-800 text-lg" />
            </a>
          </div>
          <div className="flex flex-col space-y-3">
            <a
              href="#"
              className="flex items-center bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 w-fit"
            >
              <FaApple className="mr-2 text-lg" /> App Store
            </a>
            <a
              href="#"
              className="flex items-center bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 w-fit"
            >
              <FaGooglePlay className="mr-2 text-lg" /> Google Play
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="max-w-7xl mx-auto border-t border-gray-300 pt-3 mt-5">
        <p className="text-xs text-gray-600">
          © 2024 Tech Corp. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
