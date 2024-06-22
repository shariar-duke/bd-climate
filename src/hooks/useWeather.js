import { useState, useEffect } from "react";

const useWeather = () => {
  // ei ei data gula amra api theke tulbo
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });
  // ekta loading state banay nibo initally . jotokhn porjonto api call hgoye resutl na dey totokhn eta rakhbo true api data dilei eta false hoye jabe.
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  // r ekta state nibo jate async call howar somoy kno error ba emn type kisu hole setao buja jay
  const [error, setError] = useState(null);

  // api call  korar jnno ekta async function lekhbo. ei function ta lattitude and longitude name duta pearmeter nibe karon protibar eta different hbe baki jinis hardcoced
  const fetchWeatherData = async (lattitude, longitude) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching weather data",
      });
      // ekhnae api call ta korte hbe
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );
      if (!response.ok) {
        const errorMessage = `Fetching weather data failed ${response.status}`;
        throw new Error(errorMessage);
      }

      // jode error na hoy data thik vabe ase
      const data = await response.json();
      // datar modhe onk kisu asbe eto amader dorkar nai so amra bache nibo

      const updateWeatherData = {
        ...weatherData,
        location: data.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude: longitude,
        latitude: lattitude,
      };

      // ei updatedWeatherdata dia data ta set kroe dbo

      setWeatherData(updateWeatherData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  // Amader ekta k component ta first time load howar sathe sathe call korte hbe
  useEffect(() => {
    setLoading({
      loading: true,
      message: "Finding location...",
    });
    navigator.geolocation.getCurrentPosition(function (position) {
      fetchWeatherData(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  return {
    weatherData,
    error,
    loading,
  };
};

export default useWeather;