import SearchIcon from "../../assets/search.svg";
import { LocationContext } from "../../context";
import { useContext, useState } from "react"; 
import { getLocationByName } from "../../data/location-data"; // Ekhne location er name , data sob nia asbo amra...
export default function Search() {
  // search er value ta ullam . search box a jeta type kroa hbe 
  const [searchTerm, setSearchTerm] = useState("")
  const{setSelectedLocation} = useContext(LocationContext)
  const handleSubmit =(e)=> 
  {  // button a click korle amra dekhbo j ei name amadr date te kno lcoation er name ase naki jode thake segual oi context er value te set krob jate oi value dia api call kora jay
    e.preventDefault()
    console.log("The searchTerm is", searchTerm)
    //oi location er data file theke ekta location nia asbo
    const fetchedLocation = getLocationByName(searchTerm)
    // tarpor seta amra ei context er setSelectedlocation er modhe dibo
    setSelectedLocation({...fetchedLocation})
    console.log("the details information of the location is", fetchedLocation)
  }

  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border0b-0 focus-within:rounded-md">
        <input
          onChange={(e)=> setSearchTerm(e.target.value)}
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
