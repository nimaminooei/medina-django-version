import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { FaUtensils, FaGlassCheers } from "react-icons/fa";
import { FaUtensils, FaPhone,FaGlassCheers, FaClock, FaArrowLeft } from "react-icons/fa"; // Import the icons from react-icons
import "./Header2.css"; // Import the CSS file
function Home() {
  const [showLogo, setShowLogo] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(false), 2000); // Display logo for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleMenuClick = (menuType) => {
    if (menuType === "food") {
      navigate("/food-menu");
    } else if (menuType === "drink") {
      navigate("/drink-menu");
    }
  };

  return (
    <div className="home-background flex flex-col items-center justify-center min-h-screen p-4 ">
      {showLogo ? (
        <div className="flex items-center justify-center border-[.3em] border-[#0E48C5] p-4 rounded-3xl">
          <div className="flex flex-col items-center bg-[#0E48C5] h-[14em] w-[14em] sm:h-[12em] sm:w-[12em] rounded-3xl">
            <img
              src="images/logohome.png"
              alt="Logo"
              className="w-32 h-32 sm:w-24 sm:h-24"
            />
            <div className="loader mt-4"></div> {/* Add loader div */}
          </div>
        </div>
      ) : (
        <section className="flex flex-col items-center justify-center min-h-screen relative">
          <div className="border-[#0E48C5] border-[.3em] px-1 py-1 rounded-3xl w-full sm:w-80">
            <div className="flex flex-col justify-center items-center gap-4 bg-[#0E48C5] backdrop-filter backdrop-blur-lg p-6 rounded-3xl shadow-lg">
              <img
                src="images/logohome.png"
                alt="Logo"
                className="w-32 h-32 sm:w-24 sm:h-24"
              />
              <div className="flex flex-col text-white justify-center items-center text-center text-[1.2em]">
                <div>Welcome to</div>
                <div>MEDINA restaurant</div>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <button
                  onClick={() => handleMenuClick("food")}
                  className="text-white border-white border-[.1em] flex items-center justify-center rounded-full w-[14em] h-[3em] sm:w-[12em] sm:h-[2.5em] transform transition-transform duration-300 ease-in-out scale-90 text-ellipsis overflow-hidden whitespace-nowrap text-[1.1em]"
                >
                  <FaUtensils className="mr-2" />{" "}
                  {/* Add the restaurant icon */}
                  Food Menu
                </button>
                <button
                  onClick={() => handleMenuClick("drink")}
                  className="text-white border-white border-[.1em] flex items-center justify-center rounded-full w-[14em] h-[3em] sm:w-[12em] sm:h-[2.5em] transform transition-transform duration-300 ease-in-out scale-90 text-ellipsis overflow-hidden whitespace-nowrap text-[1.1em]"
                >
                  <FaGlassCheers className="mr-2" /> {/* Add the drink icon */}
                  Drink Menu
                </button>
              </div>
            </div>
          </div>
          <div className="border-[#0E48C5] border-[.3em] px-1 py-1 rounded-3xl w-full mt-[1em]">
            <div className="px-[2em] py-[1em] bg-[#0E48C5] text-white rounded-3xl border-[.3em] border-[#0E48C5] flex items-center">
              <FaClock className="mr-2" /> {/* Add the clock icon */}
              <div className="opacity-100">Operation hours: 9:00 - 24:00</div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Home;
