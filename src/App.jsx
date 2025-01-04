import Axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [catFact, setFact] = useState("");
  return (
    <div>
      <button>Get cat facts</button>
      {catFact};
    </div>
  )
}

export default App
