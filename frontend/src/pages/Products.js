import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "../components/Cards";
import Mah from "../components/Mah";

function Products() {
  const [category, setCategory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // فرض کنیم که شما آدرس API خودتون رو اینجا وارد می‌کنید
    fetch("https://api.example.com/products")
      .then((response) => response.json())
      .then((data) => setCategory(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  if (!category) {
    return <div>Loading...</div>;
  }

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <>
      <Mah categoryTitle="Products" />
      <div className="flex flex-col gap-[2em]">
        {category.items.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
      <button
        className="bg-[#0E48C5] text-white py-[.5em] px-[2em] rounded-full mt-[2em] self-center"
        onClick={handleBackClick}
      >
        Back
      </button>
    </>
  );
}

export default Products;
