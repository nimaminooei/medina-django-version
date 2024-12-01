import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { FaClock } from "react-icons/fa";
import Header from "../components/Header";
import "./Header2.css";

function Header2() {
  const [categories, setCategories] = useState([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [cards, setCards] = useState([]);
  const [time, setTime] = useState(""); // State for storing time

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Load restaurant menu categories from the JSON file in the public folder
    axios
      .get("/restaurantMenu.json")
      .then((response) => {
        setCategories(response.data.categories);
        fetchCards(response.data.categories[0].id);
        setTime(response.data.time);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const fetchCards = (categoryId) => {
    // Load restaurant menu items from the JSON file in the public folder
    axios
      .get("/restaurantMenu.json")
      .then((response) => {
        const newCards = response.data.items.filter(
          (item) => item.categoryId === categoryId
        );
        setCards(newCards);
      })
      .catch((error) => {
        console.error("Error fetching cards:", error);
      });
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
  }, [location]);

  const handleCategoryClick = (index) => {
    setCurrentCategoryIndex(index);
    fetchCards(categories[index].id);
  };

  return (
    <>
      {showHeader ? (
        <>
          <header className="flex items-center justify-center rounded-3xl p-2 shadow-lg gap-[1em] italiana-regular ">
            <button
              onClick={() => navigate("/")}
              className="flex items-center justify-center text-black border-2  rounded-full w-10 h-10 transform transition-transform duration-300 ease-in-out hover:scale-110  "
            >
              <img
                src="https://img.icons8.com/ios-glyphs/30/ffffff/back.png"
                alt="Back to Home"
                className="w-7 h-7 mx-[2em] bg-blue-700 py-1 px-1 rounded-full"
              />
            </button>
            <nav className="categories-nav flex justify-center items-center overflow-x-auto w-full whitespace-nowrap">
              {categories.length > 0 &&
                categories.map((category, index) => (
                  <div
                    key={category.id}
                    className={`flex flex-col items-center justify-center text-[.5em] text-white border-2 border-white rounded-full w-16 h-16 mx-2 transform transition-transform duration-300 ease-in-out text-center p-1 ${
                      currentCategoryIndex === index ? "bg-blue-700" : ""
                    }`}
                    style={{ flex: "0 0 auto" }}
                    onClick={() => handleCategoryClick(index)}
                  >
                    <img
                      src={`/icons/${category.icon}`}
                      alt={`${category.title} icon`}
                      className="w-4 h-4 mb-1"
                    />
                    <span className="">{category.title}</span>
                  </div>
                ))}
            </nav>
            <div className="">
              {" "}
              {/* Added margin to separate logo and categories */}
              <img
                onClick={() => navigate("/")}
                className="h-[3em] w-[3em]  mx-[2em] bg-[#0E48C5] rounded-full"
                src="/images/logohome.png"
                alt="Logo"
              />
            </div>
          </header>
          <div className="container flex flex-col justify-center items-center gap-4 p-4 italiana-regular   ">
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex flex-col justify-center items-center  text-white border-[.3em] border-[#0E48C5] rounded-3xl shadow-xl w-80 p-[.3em] m-4 bg-green-200 bg-opacity-30"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="card-image rounded-lg mb-4 object-cover w-[80%] h-[15em]"
                />

                <h2 className="flex justify-center items-center text-2xl py-1 px-1 font-bold bg-blue-700 rounded-full w-full   ">
                  {card.title}
                </h2>
                <p className="flex justify-centr items-start text-gray-600">
                  {card.description}
                </p>
                <div className="flex justify-between gap-[12em] items-center mt-4">
                  <div className="text-lg font-semibold  bg-blue-700  rounded-full py-1 px-1  flex items-center">
                    T{card.price}
                  </div>
                  <div className="text-lg font-semibold  bg-blue-700  rounded-full py-1 px-1  flex items-center">
                    <FaClock className="ml-2" /> {time}10
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Header2;
