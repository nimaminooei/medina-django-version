import React from "react";

function Cards({ item }) {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <div className="border-[#0E48C5] border-[.2em] py-[1em] px-[1em] rounded-3xl">
          <div className="flex flex-col justify-center items-center w-[15em] gap-[1em]">
            <img
              src={item.image}
              alt={item.name}
              className="object-cover h-48 w-48" // تنظیم تصویر به اندازه مربعی
              style={{ height: "12em", width: "12em" }} // تنظیم ابعاد ثابت برای تصویر
            />
            <div className="bg-[#0E48C5] text-center rounded-full w-[9em] py-[.5em]">
              {item.name}
            </div>
            <div>{item.title}</div>
            <div className="text-center">{item.description}</div>
            <div className="bg-[#0E48C5] rounded-full w-[3.5em] text-center">
              {item.price}T
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
