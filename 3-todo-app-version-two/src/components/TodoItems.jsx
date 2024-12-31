import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

function TodoItems({ todoItems }) {
  return (
    <div className={styles.itemContainer}>
      {todoItems.map((todoItem, index) => (
        <TodoItem key={index} todoName={todoItem.name} todoDate={todoItem.date} />
      ))}
    </div>
  );
}

export default TodoItems;
