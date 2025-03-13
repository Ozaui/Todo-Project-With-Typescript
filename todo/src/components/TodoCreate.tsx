import { useState } from "react";
import { useDispatch } from "react-redux";
import { TodoType } from "../types/Types";
import { createTodo } from "../redux/todoSlice";

function TodoCreate() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<string>("");

  const handleCreateTodo = () => {
    if (newTodo.trim() === "") {
      alert("Please enter a todo");
      return;
    }
    const payload: TodoType = {
      id: Math.floor(Math.random() * 99999999999),
      content: newTodo,
    };
    dispatch(createTodo(payload));
    setNewTodo("");
  };
  return (
    <div className="todo-create">
      <h2>Create a new todo</h2>
      <input
        className="input-todo-create"
        type="text"
        placeholder="enter your todo"
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
      />
      <button className="button-todo-create" onClick={handleCreateTodo}>
        Create
      </button>
    </div>
  );
}

export default TodoCreate;
