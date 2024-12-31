import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewitem = (itemName, itemDate) => {
    // setTodoItems((currValue) => {
    //   const newTodoItems = [...currValue, { name: itemName, date: itemDate }];
    //   return newTodoItems;
    // });
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, date: itemDate },
    ]);
  };

  const deleteitem = (todoItemName) => {
    let newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewitem,
        deleteitem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <ErrorMessage />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
