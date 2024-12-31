import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    { name: "Buy Milk", date: "18/09/2024" },
    { name: "Go to College", date: "18/09/2024" },
    { name: "Learn React", date: "20/09/2024" },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
