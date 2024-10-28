import React from "react";
import { data } from "./data";
import { Link } from "react-router-dom";

const GameCard = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="grid grid-cols-1 container px-5 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-36">
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className="col-span-1 z-0 flex w-full h-full bg-transparent"
          >
            <Link
              onClick={scrollTop}
              to={`/preview/${item.id}`}
              className="group relative w-full h-full block overflow-hidden rounded-xl transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="absolute w-full z-50 h-full inset-0 bg-opacity-0 bg-black  group-hover:bg-opacity-50 transition-opacity duration-300"></div>

              <div className="relative flex justify-center items-center overflow-hidden rounded-xl">
                <img
                  src={item.imgURL}
                  alt={item.name}
                  className="transform transition-transform duration-300 w-full h-full group-hover:scale-110 rounded-xl"
                />

                <span className="absolute bottom-3 text-lg text-transparent font-bold leading-none transition-all duration-300 ease-in-out z-50 group-hover:text-white group-hover:opacity-100 opacity-0">
                  {item.name}
                </span>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default GameCard;
