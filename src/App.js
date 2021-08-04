import React, {useState, useEffect} from "react";
import PriceCard2 from "./components/PriceCard/PriceCard2";
import Data from "./components/Data/Data";


function App() {

  const [subscribe, setSubscribe] = useState(false);

  const handleClick = () => {

    setSubscribe(
      !subscribe
    )

    setTimeout(()=>{

      setSubscribe(
        subscribe
      )
      
    },3000)
  }

  return (
    
    <div className="App">
     <PriceCard2
          data = {Data}
          subscribe = {subscribe}
          handleClick = {handleClick}
      />
       
    </div>
  );
}

export default App;
