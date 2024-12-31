function TodoItem2() {
  let todoName = "Go to College";
  let todoDate = "18/09/2024";

  return (
    <div className="container">
      <div className="row hr-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2 text-center">
          <button type="button" className="btn btn-danger hr-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;