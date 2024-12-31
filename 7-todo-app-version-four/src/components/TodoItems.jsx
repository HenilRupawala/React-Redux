import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

function TodoItems({ todoItems, onDeleteItem }) {
  return (
    <div className={styles.itemContainer}>
      {todoItems.map((todoItem, index) => (
        <TodoItem
          key={index}
          id={index}
          todoName={todoItem.name}
          todoDate={todoItem.date}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </div>
  );
}

export default TodoItems;
