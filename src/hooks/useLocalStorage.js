import { useState , useEffect} from "react"
const useLocalStorage =(storagekey, defaultValue)=> 
{
  // ei state er modhe localStorage er current value ta thakbe r setValue dia oi value ta set koray dawa jbe  
  const[value, setValue] = useState(JSON.parse(localStorage.getItem(storagekey)) ?? defaultValue)

  useEffect(()=> {
    localStorage.setItem(storagekey, JSON.stringify(value))
  }, [value, storagekey])

  return[value, setValue]
}

export {useLocalStorage}