import { LocationContext } from "../context"
import { useState } from "react"
const LocationProvider =({childeren})=> 
{
  const[selectedLoation , setSelectedLocation] = useState({
    location:"",
    latitude:0,
    longitude:0
  })
  return(
    <LocationContext.Provider value={{selectedLoation, setSelectedLocation}}>
        {childeren}
    </LocationContext.Provider>
  )
}