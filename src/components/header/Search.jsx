import SearchIcon from "../../assets/search.svg";
import { LocationContext } from "../../context";
import { useContext, useState } from "react";
import { getLocationByName } from "../../data/location-data";
import { useDebounce } from "../../hooks";
export default function Search() {
 
  const { setSelectedLocation } = useContext(LocationContext);

  const doSearch = useDebounce((term)=> {

    const fetchedLocation = getLocationByName(term);
    setSelectedLocation({ ...fetchedLocation });
 
  }, 500)

  const handleChange = (e) => {
    const value = e.target.value;
    doSearch(value)
  };

  return (
    <form action="#" >
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border0b-0 focus-within:rounded-md">
        <input
          onChange={handleChange}
          type="search"
          placeholder="Search Location"
          required
          className="bg-transparent placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
        />
        <button type="submit">
          <img src={SearchIcon} alt="" />
        </button>
      </div>
    </form>
  );
}
