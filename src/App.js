import React, {useState, useEffect} from "react";
import PriceCard2 from "./components/PriceCard2";
import Data from "./components/Data";

function App() {


  return (
    <div className="App">
     <PriceCard2
          data = {Data}
      />
    </div>
  );
}

export default App;
