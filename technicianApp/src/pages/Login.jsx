import React, { useContext, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { FaPhone } from "react-icons/fa6";
import { useAuth } from "../context/ContextApi";

const Login = () => {
  const [phone, setPhone] = React.useState("");
  const { login, user } = useAuth();

  const handleSubmit = () => {
    login(phone);
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  const data = [
    {
      phone: "1234567890",
      otp: "123456",
    },
    {
      phone: "12345ufdu67890",
      otp: "1234kqb56",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black bg-opacity-50">
      <div className="z-50 flex flex-col space-y-4">
        {/* Cross */}
        <div className="bg-white text-lg font-semibold p-4 rounded-full w-12">
          <RxCross1 />
        </div>
        <div className="bg-white flex flex-col p-2">
          {/* Phone */}
          <div className="py-4 text-3xl font-bold">
            <FaPhone />
          </div>
          {/* Text */}
          <div>
            <div className="text-2xl font-bold ">Enter your phone number</div>
            <div className="text-sm">
              We’ll send you a text with a verification code.
            </div>
          </div>
          {/* Input */}
          <div className="flex border border-gray-300 px-4 py-2">
            <div className="flex text-center">+91</div>
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="Enter Your Phone number"
              className="pl-4 w-48"
            />
          </div>
          {/* Button */}
          <div>
            <button
              type="button"
              onClick={handleSubmit}
              className={`${
                phone.length > 9
                  ? "bg-blue-400 hover:bg-blue-500 text-white font-semibold"
                  : "bg-gray-300 text-gray-500"
              } text-center`}
            >
              Continue
            </button>
          </div>
          {/* Terms */}
          <div>
            By continuing, you agree to our{" "}
            <span className="font-bold underline">T&C</span> and Privacy policy.
          </div>
        </div>
      </div>
      {data.map((item, key) => {
        return (
          <div key={key} className="text-white">
            <div>Phone : {item.phone}</div>
            <div>Otp : {item.otp}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Login;
