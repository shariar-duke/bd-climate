import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { useContext } from "react";
import { WeatherContext } from "./context";
import { useState, useEffect } from "react";

// all background images 
import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import ScatterdCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "./assets/backgrounds/sunny.jpg";
import ThunderStormImage from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";

export default function Page() {
// background image er jnno ekta state nibo and seta useEffect erm odhe set korbo jode ei climeate er value change hoy tahole jno useEffect abar run hye background er value cahnge hoiy 
  const [climateImage, setClimateImage] = useState("");
  const { loading , weatherData } = useContext(WeatherContext);
  const {climate} = weatherData


  function getBackgroundImage(climate) {
    switch (climate) {
        case "Rain":
            return RainyDayImage;
        case "Clouds":
            return ScatterdCloudsImage;
        case "Clear":
            return ClearSkyImage;
        case "Snow":
            return SnowImage;
        case "Thunder":
            return ThunderStormImage;
        case "Fog":
            return WinterImage;
        case "Haze":
            return FewCloudsImage;
        case "Mist":
            return MistImage;
        default:
            return ClearSkyImage;
    }
 }

 // for setiing the backgroundImage I am using a useEffect 
 useEffect(() => {
    const bgImage = getBackgroundImage(weatherData.climate);
    setClimateImage(bgImage);
}, [climate]);

//

  return (
    <>
      {loading.state ? (
        <div className="flex bg-gray-200 rounded-md w-96 mt-14 mx-auto">
          <p className="text-center text-3xl text-black">{loading.message}</p>
        </div>
      ) : (
        <div
        // I need to add the background Image using style
         style={{ backgroundImage: `url('${climateImage}')` }}
         className="grid place-items-center h-screen bg-no-repeat bg-cover">
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
}
