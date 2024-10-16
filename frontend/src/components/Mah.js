import React from "react";
import { Link } from "react-router-dom";

function Mah({ categoryTitle }) {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col py-[2em]">
        <div className="flex flex-row justify-around items-center">
          <Link
            to="/"
            className="bg-[#0E48C5] rounded-3xl w-[3em] h-[2em] text-center py-[.4em] text-[1rem] flex items-center justify-center"
          >
            <img
              src="path/to/your/home-icon.svg"
              alt="Home"
              className="w-4 h-4"
            />{" "}
          </Link>
          <div className="flex flex-col items-center">
            <div className="bg-[#0E48C5] rounded-2xl w-[7em] h-[2em] text-center py-[.4em]">
              {categoryTitle}
            </div>
            <img
              src="images/logo1.png"
              className="h-[5em] w-[5em] bg-[#0E48C5] rounded-full mt-[1em]"
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mah;
