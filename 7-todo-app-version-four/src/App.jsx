
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewitem = (itemName, itemDate) => {
    // setTodoItems((currValue) => {
    //   const newTodoItems = [...currValue, { name: itemName, date: itemDate }];
    //   return newTodoItems;
    // });
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, date: itemDate },
    ]);
  };

  const handleDeleteitem = (todoItemName) => {
    let newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewitem} />
      <ErrorMessage items={todoItems} />
      <TodoItems todoItems={todoItems} onDeleteItem={handleDeleteitem} />
    </center>
  );
}

export default App;
