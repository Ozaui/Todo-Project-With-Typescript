function TodoCreate() {
  return (
    <div className="todo-create">
      <h2>Create a new todo</h2>
      <input
        className="todo-create-input"
        type="text"
        placeholder="Enter your Todo..."
      />
      <button className="todo-create-button">Create</button>
    </div>
  );
}

export default TodoCreate;
