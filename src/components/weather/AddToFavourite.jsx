import HeartIcon from "../../assets/heart.svg"
import RedHearIcon from "../../assets/heart-red.svg"
import { useContext, useState } from "react"
import { FavouriteContext , WeatherContext } from "../../context"
export default function AddToFavourite() {
  const { favourities , addToFavourites, removeFromFavourites} =  useContext(FavouriteContext)
  const[isFavourite ,setIsFavourite ] = useState(false)

  // I need WatherContext here also

  const {weatherData} = useContext(WeatherContext)
  console.log("Weather Data is", weatherData)

  const {latitude, longitude, location} = weatherData
  function handleFavourites() {
    const found = favourities.find((fav) => fav.location === location);

    if (!found) {
        addToFavourites(latitude, longitude, location);
    } else {
        removeFromFavourites(location);
    }
    setIsFavourite(!isFavourite);
}
  return (
    <div className="md:col-span-2">
        <div className="flex items-center justify-end space-x-6">
            <button onClick={handleFavourites}
            className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
                <span>Add to Favourite</span>
                <img src={isFavourite ? RedHearIcon: HeartIcon} alt="" />
            </button>
        </div>
    </div>
  )
}
