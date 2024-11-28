import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header"; // Assuming Header is the main header component

function Header2() {
  const [categories, setCategories] = useState([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [cards, setCards] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Load restaurant menu categories from the JSON file in the public folder
    axios
      .get("/api/items/?format=json")
      .then((response) => {
        setCategories(response.data.categories);
        fetchCards(response.data.categories[0].id);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const fetchCards = (categoryId) => {
    // Load restaurant menu items from the JSON file in the public folder
    axios
      .get("/api/items/?format=json")
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
          <header className=" flex items-center  justify-center  rounded-3xl p-2 shadow-lg   gap-[1em]">
            <button
              onClick={() => navigate("/")}
              className="flex items-center justify-center text-black border-2 border-white rounded-full w-10 h-10 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-white hover:text-purple-500"
            >
              <img
                src="https://img.icons8.com/ios-glyphs/30/ffffff/back.png"
                alt="Back to Home"
                className="w-6 h-6 bg-blue-700 py-1 px-1 rounded-full"
              />
            </button>
            <nav className="flex justify-center items-center space-x-2">
              {categories.length > 0 &&
                categories.map((category, index) => (
                  <div
                    key={category.id}
                    className={`   flex flex-col items-center justify-center text-[.5em] text-white border-2 border-white text-nowrap rounded-full w-16 h-16 transform transition-transform duration-300 ease-in-out text-center p-1 overflow-hidden ${
                      currentCategoryIndex === index
                        ? "bg-blue-700"
                        : "bg-blue-300"
                    }`}
                    onClick={() => handleCategoryClick(index)}
                  >
                    <img
                      src={`/icons/${category.image}`}
                      alt={`${category.name} icon`}
                      className="w-5 h-5 mb-1"
                    />
                    <span className="">{category.name}</span>
                  </div>
                ))}
            </nav>
            <div className="ml-4">
              {" "}
              {/* Added margin to separate logo and categories */}
              <img
                onClick={() => navigate("/")}
                className="h-[3em] w-[3em] bg-[#0E48C5] rounded-full"
                src="/images/logohome.png"
                alt="Logo"
              />
            </div>
          </header>
          <div className="container flex flex-col justify-center items-center gap-4 p-4">
            {cards.map((card) => (
              <div
                key={card.id}
                className=" flex-col justify-center items-center  text-white border-[.3em] border-[#0E48C5] rounded-3xl shadow-lg w-80 p-[.3em] m-4"
              >
                <img
                  src={card.image}
                  alt={card.name}
                  className="card-image rounded-lg mb-4 object-cover w-full"
                />

                <h2 className=" flex justify-center items-center text-2xl  py-1 px-1 font-bold bg-blue-700 rounded-full">
                  {card.name}
                </h2>
                <p className="flex justify-center items-center  text-gray-700">
                  {card.description}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div className="  text-lg font-semibold bg-blue-700 rounded-full py-1 px-1">
                    {card.price} &zwnj;T
                  </div>
                  {/* <div className="flex items-center">
                    <img
                      src="https://img.icons8.com/ios-filled/50/000000/clock.png"
                      alt="Time Icon"
                      className="w-5 h-5 mr-2"
                    />
                    <span className=" bg-blue-700 rounded-full py-1 px-1">
                      {card.preparationTime}
                    </span>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <Header />
      )}
    </>
  );
}

export default Header2;
