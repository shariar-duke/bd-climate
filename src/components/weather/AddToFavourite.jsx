import HeartIcon from "../../assets/heart.svg"
import RedHearIcon from "../../assets/heart-red.svg"
import { useContext, useState } from "react"
import { FavouriteContext } from "../../context"
export default function AddToFavourite() {
  const { favourities , addToFavourites, removeFromFavourites} =  useContext(FavouriteContext)
  const[isFavourite ,setIsFavourite ] = useState(false)

  const handleFavourte =()=> 
  {
    setIsFavourite(!isFavourite)
  }
  return (
    <div className="md:col-span-2">
        <div className="flex items-center justify-end space-x-6">
            <button onClick={handleFavourte}
            className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
                <span>Add to Favourite</span>
                <img src={isFavourite ? RedHearIcon: HeartIcon} alt="" />
            </button>
        </div>
    </div>
  )
}
