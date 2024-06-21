import React from "react";
import AddToFavourite from "./AddToFavourite";
import WeatherHeadLine from "./WeatherHeadLine";
import WeatherCondition from "./WeatherCondition";
import { useContext } from "react"; // use Conte4xt
import { WeatherContext } from "../../context"; // weather context ta import korlam
export default function WeatherBoard() {
  const { weatherData, loading } = useContext(WeatherContext);

  console.log("The weather data from the conext", weatherData);

  return (
    <div className="container">
      <div className="grid bg-black/20 rounded-xl backdrop:blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
        <div className="grid md:grid-cols-2 md:gap-6">
          {loading.state ? (
            <p>Loading ...</p>
          ) : (
            <>
              <AddToFavourite />
              <WeatherHeadLine />
              <WeatherCondition />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
