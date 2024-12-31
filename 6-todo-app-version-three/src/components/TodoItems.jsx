import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItems() {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className={styles.itemContainer}>
      {todoItems.map((todoItem, index) => (
        <TodoItem
          key={index}
          id={index}
          todoName={todoItem.name}
          todoDate={todoItem.date}
        />
      ))}
    </div>
  );
}

export default TodoItems;
