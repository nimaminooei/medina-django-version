import React, { useState, useEffect } from "react";
import SectionOne from "./SectionOne";
import Mah from "../components/Mah"; // وارد کردن هدر

const Home = () => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(false), 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {showLogo ? (
        <div className="flex flex-col b">
          <img
            src="images/logo1.png"
            alt="Logo"
            className="w-32 h-32 animate-bounce"
          />
          <div className="text-black">Welcome to MEDINA</div>
        </div>
      ) : (
        <div>
          <Mah categoryTitle="Welcome" /> {/* اضافه کردن هدر */}
          <SectionOne />
        </div>
      )}
    </div>
  );
};

export default Home;
