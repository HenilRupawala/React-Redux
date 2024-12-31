import { useRef } from "react";
import styles from "./AddTodo.module.css";
import { IoIosAddCircle } from "react-icons/io";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };
  return (
    <div className="container text-center">
      <form className="row hr-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            className={styles.inputWidth}
            type="text"
            placeholder="Enter Todo Here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input
            className={styles.inputWidth}
            type="date"
            ref={dueDateElement}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success hr-button">
            <IoIosAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
