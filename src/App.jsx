import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherProvider, FavouriteProvider, LocationProvider } from "./provider";
export default function App() {
  return (

    <WeatherProvider>
      <LocationProvider>
      <FavouriteProvider>
        <div className="grid place-items-center h-screen">
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      </FavouriteProvider>
      </LocationProvider>

    </WeatherProvider>


  );
}
