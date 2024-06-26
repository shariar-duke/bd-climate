import React from "react";
import { FavouriteContext , LocationContext } from "../../context";
import { useContext } from "react";

export default function FavouriteListModal() {
  const { favourities } = useContext(FavouriteContext);
  const {setSelectedLocation} = useContext(LocationContext)
  console.log("The favourites are", favourities)

  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg">
      <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
        {favourities.length > 0 ? (
          favourities.map((fav) => (
            <li key={fav.location} className="hover:bg-gray-200">
              {/* onClick a context a favourite er ekta value dia dilam  */}
              <a onClick={()=>setSelectedLocation({...fav})}>{fav.location}</a>
            </li>
          ))
        ) : (
          <p>Notghing is added to Favourities</p>
        )}
      </ul>
    </div>
  );
}
