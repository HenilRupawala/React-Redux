import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const ErrorMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <>
      {todoItems.length === 0 && <h3>There is nothing else to do anymore.</h3>}
    </>
  );
};

export default ErrorMessage;
