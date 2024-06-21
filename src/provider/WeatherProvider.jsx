import { WeatherContext } from "../context"; // context ta import korlma
import { useWeather } from "../hooks"; // hook ta imoprt korlam jeta dia data tula jay

// ei WeatherProvider j j component k wrap krote chay sei compoenent ta full nibe
const WeatherProvider = ({ children }) => {
  const { loading, error, weatherData } = useWeather();
  return (
    <WeatherContext.Provider value={{loading, error, weatherData }}>{children}</WeatherContext.Provider>
  );
};

export default WeatherProvider;
