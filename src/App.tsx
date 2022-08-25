import React, { useState, useEffect } from "react";
import { FruitType, FruitsArray } from "./utils/fruitsData";
import AddFruit from "./component/AddFruit";
import "./App.css";

function App() {
  const [fruitsState, setFruitsState] = useState<FruitType[]>([]);

  useEffect(() => {
    setFruitsState(FruitsArray);
  }, []);

  const list = fruitsState.map((fruit) => (
    <li key={fruit.id}>
      <div>{fruit.name}</div>
      <div>{fruit.price}</div>
    </li>
  ));

  return (
    <div className="wrapper">
      <div className="tabs"></div>
      <div className="list">{list}</div>
      <div className="add"></div>
      <AddFruit fruitsState={fruitsState} setFruitsState={setFruitsState} />
    </div>
  );
}

export default App;
