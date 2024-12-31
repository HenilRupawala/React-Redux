import { MdDelete } from "react-icons/md";

function TodoItem({ todoName, todoDate, onDeleteItem, id}) {
  return (
    <div className="container">
      <div className="row hr-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2 text-center">
          <button
            type="button"
            className="btn btn-danger hr-button"
            onClick={() => onDeleteItem(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
