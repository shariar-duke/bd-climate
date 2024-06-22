import { FavouriteContext } from "../context";
import { useLocalStorage } from "../hooks";
const FavouriteProvider = ({ children }) => {
  // ekta lcoal storage create korlam jar key holo favourites r value holo empty array
  const [favourities, setFavourities] = useLocalStorage("favourites", []);

  const addToFavourites = (latitude, longitude, location) => {
    setFavourities([
      ...favourities,
      {
        latitude: latitude,
        longitude: longitude,
        location: location,
      },
    ]);
  };

  const removeFromFavourites = (location) => {
    const restFavourites = favourities.filter(
      (fav) => fav.location !== location
    );
    setFavourities(restFavourites);
  };
  return (
    <FavouriteContext.Provider
      value={{ favourities, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
