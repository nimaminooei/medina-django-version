import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaClock } from "react-icons/fa";
import "./Header2.css";

function FoodMenu() {
  const [categories, setCategories] = useState([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [cards, setCards] = useState([]);
  const navRef = useRef(null); // Ref for navigation element

  const navigate = useNavigate();

  useEffect(() => {
    // Load all menu categories from the JSON file in the public folder
    axios
      .get("https://medina-restaurant.ir/api/items/?format=json&side=FOOD")
      .then((response) => {
        setCategories(response.data.categories); // No filter, display all categories
        fetchCards(response.data.categories[0].id);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const fetchCards = (categoryId) => {
    // Load menu items from the JSON file in the public folder
    axios
      .get("https://medina-restaurant.ir/api/items/?format=json")
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

  const handleCategoryClick = (index) => {
    setCurrentCategoryIndex(index);
    fetchCards(categories[index].id);
    scrollToCenter(index);
  };

  const scrollToCenter = (index) => {
    const nav = navRef.current;
    const item = nav.children[index];
    const itemLeft = item.offsetLeft;
    const itemWidth = item.clientWidth;
    const navWidth = nav.clientWidth;
    const scrollPosition = itemLeft - navWidth / 2 + itemWidth / 2;
    nav.scroll({
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="flex items-center justify-center rounded-3xl p-2 shadow-lg gap-[1em] italiana-regular">
        <button
          onClick={() => navigate("/")}
          className="flex items-center justify-center text-black rounded-full w-10 h-10 transform transition-transform duration-300 ease-in-out hover:scale-110"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/ffffff/back.png"
            alt="Back to Home"
            className="w-7 h-7 bg-blue-700 py-1 px-1 rounded-full"
          />
        </button>
        <nav className="categories-nav " ref={navRef}>
          {categories.length > 0 &&
            categories.map((category, index) => (
              <div
                key={category.id}
                className="category-item"
                onClick={() => handleCategoryClick(index)}
              >
                <div
                  className={`category-icon ${
                    currentCategoryIndex === index ? "selected" : "unselected"
                  }`}
                >
                  <img
                    src={`/icons/${category.icon}`}
                    alt={`${category.title} icon`}
                  />
                </div>
                <span className="text-xs">{category.title}</span>
              </div>
            ))}
        </nav>
        <div className=" flex justify-center items-center w-[4em] h-[3em] bg-[#0E48C5] rounded-full">
          <img
            onClick={() => navigate("/")}
            className="h-[2em] w-[2em] rounded-full"
            src="/images/logohome.png"
            alt="Logo"
          />
        </div>
      </header>
      <div className="container flex flex-col justify-center items-center gap-4 p-4 italiana-regular">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col justify-center items-center text-white border-[.3em] border-[#0E48C5] rounded-3xl shadow-xl w-80 p-[.3em] m-4 bg-green-200 bg-opacity-30"
          >
            <img
              src={card.image}
              alt={card.title}
              className="card-image rounded-lg mb-4 object-cover w-[80%] h-[15em]"
            />
            <h2 className="flex justify-center items-center text-2xl py-1 px-1 font-bold bg-blue-700 rounded-full w-full">
              {card.title}
            </h2>
            <p className="flex justify-center items-start text-gray-600">
              {card.description}
            </p>
            <div className="flex justify-between gap-[12em] items-center mt-4">
              <div className="text-lg font-semibold bg-blue-700 rounded-full py-1 px-1 flex items-center">
                <div className="text-[.7em] text-nowrap">هزار تومن</div>
                {card.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FoodMenu;
