import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  // const fetchData=()=>{
  // axios.get("http://localhost:8000/api/users/1").then((res) => {
  //   console.log(res.data);
  // });

  // }
  // fetchData();

  // const fetchFact= () =>{
  //   axios.get("https://catfact.ninja/fact").then((res) =>{
  //     setFact(res.data.fact);
  //   });
  // };

  useEffect(() => {
    //this is called twice
    axios
      .patch("http://localhost:8000/api/users/30", {
        first_name: "saikat",
        last_name: "deb",
        email: "saikat@imageshack.us",
        gender: "male",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    //after removing the React.StrictMode it runs for only once
    // fetchFact();
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
      {/* <button onClick={}>Get cat facts</button> */}
      {/* {catFact}; */}
    </div>
  );
}

export default App;
