import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/api/items/?format=json")
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
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
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
        <section className="flex flex-col items-center justify-center min-h-screen">
          <div className="border-[#0E48C5] border-[.3em] px-1 py-1 rounded-3xl w-full sm:w-80">
            <div className="flex flex-col justify-center items-center gap-4 bg-[#0E48C5] backdrop-filter backdrop-blur-lg p-6 rounded-3xl shadow-lg">
              <img
                src="images/logohome.png"
                alt="Logo"
                className="w-32 h-32 sm:w-24 sm:h-24"
              />
              <div className="flex flex-col text-white justify-center items-center text-center">
                <div>Welcome to</div>
                <div>MEDINA restaurant</div>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <button
                  onClick={handleMenuClick}
                  className="text-white border-white border-[.1em] flex items-center justify-center rounded-full w-[14em] h-[3em] sm:w-[12em] sm:h-[2.5em] transform transition-transform duration-300 ease-in-out scale-90 text-ellipsis overflow-hidden whitespace-nowrap"
                >
                  Menu
                </button>
                <button
                  onClick={() => navigate("/about")}
                  className="text-white border-white border-[.1em] flex items-center justify-center rounded-full w-[14em] h-[3em] sm:w-[12em] sm:h-[2.5em] transform transition-transform duration-300 ease-in-out scale-90 text-ellipsis overflow-hidden whitespace-nowrap"
                >
                  About
                </button>
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
          <div className="flex-col items-center justify-center mt-4 text-center">
            <div>Operation hours:</div>
            <div>9:00 - 24:00</div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Home;
