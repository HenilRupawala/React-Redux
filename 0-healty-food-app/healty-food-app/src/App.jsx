import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <Container>
      <h1>Healty Food</h1>
      <FoodInput handleKeyDown={onKeyDown} />
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems}></FoodItems>
    </Container>
  );
}

export default App;
