import Axios from "axios";
import { useEffect, useState } from "react";
function App() {
  useEffect(() =>{
    //this is called twice
    Axios.get("https://catfact.ninja/fact").then((res) =>{
      setFact(res.data.fact);
    })
  }, []);

    //without useEffect it goes infinitely because:
    /* 
    it after requests and gets the data,
    it shows it in the ui..
    and because of this change the state is again reloaded and hence it again makes the request to fetch the data
    */
  const [catFact, setFact] = useState("");
  return (
    <div>
      <button>Get cat facts</button>
      {catFact};
    </div>
  )
}

export default App
