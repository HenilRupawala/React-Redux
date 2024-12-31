import { useState } from "react";
import Item from "./item";

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <I tem
          item={item}
          key={index}
          handleBuyButton={() => onBuyButton(item)}
          bought={activeItems.includes(item)}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
