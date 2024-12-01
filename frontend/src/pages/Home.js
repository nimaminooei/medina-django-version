import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUtensils, FaPhone, FaClock, FaArrowLeft } from "react-icons/fa"; // Import the icons from react-icons
import "./Header2.css"; // Import the CSS file

function HomeSection({ text, navigateTo }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateTo);
  };

  return (
    <div
      onClick={handleClick}
      className="flex justify-center items-center w-full cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110"
    >
      <div className="opacity-95 hover:opacity-75">
        <button className="text-white border-white border-[.1em] flex items-center justify-center rounded-full w-[14em] h-[3em] transform transition-transform duration-300 ease-in-out scale-90 text-ellipsis overflow-hidden whitespace-nowrap">
          {text}
        </button>
      </div>
    </div>
  );
}

function Home() {
  const [categories, setCategories] = useState([]);
  const [showLogo, setShowLogo] = useState(true);
  const [showCategories, setShowCategories] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [menuClickCount, setMenuClickCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/restaurantMenu.json")
      .then((response) => {
        setCategories(response.data.categories);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    const timer = setTimeout(() => setShowLogo(false), 2000); // Display logo for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleMenuClick = () => {
    setShowCategories(true);
    setShowContactInfo(false);
    setMenuClickCount(menuClickCount + 1);
  };

  const handleAboutClick = () => {
    setShowContactInfo(true);
    setShowCategories(false);
  };

  const handleBackClick = () => {
    setShowCategories(false);
    setShowContactInfo(false);
    setMenuClickCount(0);
  };

  return (
    <div className="home-background flex flex-col items-center justify-center min-h-screen p-4">
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
        <section className="flex flex-col items-center justify-center min-h-screen relative italiana-regular">
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
                {showCategories || showContactInfo ? (
                  <button
                    onClick={handleBackClick}
                    className="text-white border-white border-[.1em] flex items-center justify-center rounded-full w-[14em] h-[3em] sm:w-[12em] sm:h-[2.5em] transform transition-transform duration-300 ease-in-out scale-90 text-ellipsis overflow-hidden whitespace-nowrap text-[1.1em]"
                  >
                    <FaArrowLeft className="mr-2" /> {/* Add the back icon */}
                    Back
                  </button>
                ) : (
                  <>
                    <button
                      onClick={handleMenuClick}
                      className="text-white border-white border-[.1em] flex items-center justify-center rounded-full w-[14em] h-[3em] sm:w-[12em] sm:h-[2.5em] transform transition-transform duration-300 ease-in-out scale-90 text-ellipsis overflow-hidden whitespace-nowrap text-[1.1em]"
                    >
                      <FaUtensils className="mr-2" />{" "}
                      {/* Add the restaurant icon */}
                      Menu
                    </button>
                    <button
                      onClick={handleAboutClick}
                      className="text-[1.1em] text-white border-white border-[.1em] flex items-center justify-center rounded-full w-[14em] h-[3em] sm:w-[12em] sm:h-[2.5em] transform transition-transform duration-300 ease-in-out scale-90 text-ellipsis overflow-hidden whitespace-nowrap"
                    >
                      <FaPhone className="mr-2" /> {/* Add the phone icon */}
                      Contact Information
                    </button>
                  </>
                )}
                {showContactInfo && (
                  <div className="flex flex-col gap-2 mt-2">
                    <button className="text-[1.1em] text-white border-white border-[.1em] flex items-center justify-center rounded-full w-[14em] h-[3em] sm:w-[12em] sm:h-[2.5em] transform transition-transform duration-300 ease-in-out scale-90 text-ellipsis overflow-hidden whitespace-nowrap">
                      Phone: 123-456-7890
                    </button>
                  </div>
                )}
              </div>
              {showCategories &&
                categories.map((category) => (
                  <HomeSection
                    key={category.id}
                    text={category.title}
                    navigateTo={`/category/${category.id}`}
                  />
                ))}
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
