import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import TodoItemsContextProvider from "./store/todo-items-store";


function App() {

  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <ErrorMessage />
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;