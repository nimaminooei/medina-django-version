import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SectionOne() {
  const [showButtons, setShowButtons] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // فرض کنیم که شما آدرس API خودتون رو اینجا وارد می‌کنید
    fetch("https://api.example.com/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="border-[#0E48C5] border-[.3em] py-[1em] px-[1em] rounded-3xl">
        <div className="flex flex-col justify-center items-center gap-[1em] bg-[#0E48C5] w-[18em] rounded-3xl py-[1em]">
          <img className="h-[9em] w-[9em]" src="images/logo1.png" alt="Logo" />
          <div className="flex flex-col justify-center items-center text-white tect-[3rem]">
            <div>Welcome</div>
            <div>to</div>
            <div>MEDINA restaurant</div>
          </div>
          <button className="bg-white w-[15em] text-black py-[.5em] rounded-2xl">
            about us
          </button>
          <div className="flex flex-col items-center">
            <button
              className="bg-white w-[15em] text-black py-[.5em] rounded-2xl"
              onClick={() => setShowButtons(!showButtons)}
            >
              Menu
            </button>
            {showButtons && (
              <div className="flex flex-col gap-[.7em] mt-[1em]">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/category/${category.id}`}
                    className="bg-white w-[15em] text-black py-[.5em] rounded-2xl text-center"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center absolute bottom-[0em]">
        <div>Operation hours :</div>
        <div>9:00 - 24:00</div>
      </div>
    </section>
  );
}

export default SectionOne;
