import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/todoSlice";
import { TodoType } from "../types/Types";

function TodoCreate() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<string>("");

  const handleTodoCreate = () => {
    if (newTodo.trim() === "") {
      alert("Please enter a valid todo");
      return;
    }
    const paytload: TodoType = {
      id: Math.floor(Math.random() * 99999),
      content: newTodo,
    };
    dispatch(createTodo(paytload));
    setNewTodo("");
  };
  return (
    <div className="todo-create">
      <h2>Create a new todo</h2>
      <input
        className="todo-create-input"
        type="text"
        placeholder="Enter your Todo..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
        value={newTodo}
      />
      <button onClick={handleTodoCreate} className="todo-create-button">
        Create
      </button>
    </div>
  );
}

export default TodoCreate;
