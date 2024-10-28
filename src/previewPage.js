import React, { useRef } from "react";
import { data } from "./data";
import { useParams } from "react-router";
import GameCard from "./gameCard";

const PreviewPage = () => {
  const param = useParams();
  const game = data?.find((item) => item?.id == param?.id);

  return (
    <div>
      <div className="mt-20">
        <section>
          <div class="container-fluid min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
            <h4 class="text-center mt-3 mb-3 text-xl md:text-2xl font-semibold">
              Play Online - {game.name}
            </h4>

            <div class="game-area w-full flex-grow bg-gray-800 flex justify-center items-center relative">
              <iframe
                class="w-4/5 h-[70vh] md:h-[75vh] lg:h-[80vh] border-none"
                src={game?.iframe}
                allowfullscreen
              ></iframe>
            </div>

            <div class="w-full bg-gray-800 container text-gray-100 flex flex-col lg:flex-row justify-center lg:justify-between items-center py-4 px-5  lg:px-5">
              <div class="flex items-center mb-4 lg:mb-0">
                <img
                  src={game?.imgURL}
                  alt="Online Game"
                  class="rounded-md w-12 h-12 lg:w-16 lg:h-16 object-cover"
                />
                <div class="ml-4 ">
                  <span class="text-lg lg:text-xl font-semibold">
                    {game?.name}
                  </span>
                </div>
              </div>
            </div>
            <div className="m-4 pt-4 container px-5 border-t-2 w-full border-gray-400">
              <p className="font-medium text-lg">{game.description}</p>
            </div>
            <div className="border-t-2 mt-10 w-full border-gray-400">
              <GameCard />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PreviewPage;
