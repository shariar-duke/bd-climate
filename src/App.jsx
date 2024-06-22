import Page from "./page";
import {
  WeatherProvider,
  FavouriteProvider,
  LocationProvider,
} from "./provider";
export default function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
         <Page/>
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}
