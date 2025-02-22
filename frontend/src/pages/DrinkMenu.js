import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaClock } from "react-icons/fa";
import "./Header2.css";

function DrinkMenu() {
  const [categories, setCategories] = useState([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [cards, setCards] = useState([]);
  const navRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://medinarestaurant.org/api/items/?format=json&side=DRINK")
      .then((response) => {
        setCategories(response.data.categories);
        fetchCards(response.data.categories[0].id);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const fetchCards = (categoryId) => {
    axios
      .get("https://medinarestaurant.org/api/items/?format=json")
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
      <header className="flex items-center justify-center rounded-3xl p-2 shadow-lg gap-[1em]">
        <button
          onClick={() => navigate("/")}
          className="flex items-center justify-center text-black rounded-full w-10 h-10 transform transition-transform duration-300 ease-in-out hover:scale-110"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/ffffff/back.png"
            alt="Back to Home"
            className="w-7 h-7  bg-blue-700 py-1 px-1 rounded-full"
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
                  className={`category-icon ${currentCategoryIndex === index
                      ? "selected"
                      : "unselected"
                    }`}
                >
                  <img
                    src={`${category.image}`}
                    alt={`${category.name} icon`}
                  />
                </div>
                <span className="text-xs">{category.name}</span>
              </div>
            ))}
        </nav>
        <div className=" flex justify-center items-center w-[6em] h-[5em] rounded-full">
          {" "}
          {/* Added margin to separate logo and categories */}
          <img
            onClick={() => navigate("/")}
            className="h-[5em] w-[5em]   rounded-full"
            src="/images/logohome.png"
            alt="Logo"
          />
        </div>
      </header>
      <div className="container flex flex-col justify-center items-center gap-4 p-4 ">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col justify-center items-center text-white pt-[1.5em] h-[26em] border-[.3em] border-[#0E48C5] rounded-3xl shadow-xl w-[18em] p-[.3em] m-4 bg-green-200 bg-opacity-30"
          >
            <img
              src={`${card.image}`}
              alt={card.name}
              className="card-image rounded-lg mb-4 object-cover w-[13em] h-[13em]"
            />
            <h2 className="flex justify-center items-center text-2xl py-1  font-bold bg-blue-700 rounded-full w-60">
              {card.name}
            </h2>
            <p className="text-center text-gray-600 rtl">
              {card.description}
            </p>
            <div className="flex justify-between gap-[8em] items-center mt-4 w-[100%]">
              <div className="text-lg font-semibold bg-blue-700 rounded-full py-[1px] ml-[1em] px-[5px] flex items-center ">
                <div className="text-[1em] text-nowrap"> &zwnj; T  &zwnj;</div>
                {card.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default DrinkMenu;
