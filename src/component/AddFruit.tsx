import React, { useState } from "react";
import { FruitsArray, FruitType } from "../utils/fruitsData";

interface Props {
  setFruitsState: (array: FruitType[]) => void;
  fruitsState: FruitType[];
}

const AddFruit = ({ setFruitsState, fruitsState }: Props) => {
  const [fruitName, setFruitName] = useState("");
  const [fruitPrice, setFruitPrice] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    setFruitsState([
      ...fruitsState,
      {
        id: FruitsArray.length + 1,
        name: fruitName,
        price: fruitPrice,
        starred: false,
      },
    ]);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        Fruit Name
        <input onChange={(e) => setFruitName(e.target.value)} type="text" />
      </label>
      <label>
        Price
        <input
          onChange={(e) => setFruitPrice(Number(e.target.value))}
          type="number"
        />
      </label>
      <input value="addFruit" type="submit" />
    </form>
  );
};

export default AddFruit;
