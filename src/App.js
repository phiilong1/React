import React, { useState } from "react";
import Fruits from "./components/Fruits";
import FruitsCounter from "./components/FruitsCounter";

function App() {
  // Nâng state lên App
  const [fruits] = useState([
    { fruitName: 'apple', id: 1 },
    { fruitName: 'apple', id: 2 },
    { fruitName: 'plum', id: 3 },
  ]);

  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      {/* Truyền state fruits xuống cho cả Fruits và FruitsCounter */}
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </div>
  );
}

export default App;
