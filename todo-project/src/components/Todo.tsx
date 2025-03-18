import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { todoProps, TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodo } from "../redux/todoSlice";
import { useState } from "react";

function Todo({ todoProps }: todoProps) {
  const { id, content } = todoProps;

  const dispacth = useDispatch();

  const handleRemoveTodo = () => {
    dispacth(removeTodoById(id));
  };

  const handleUpdateTodo = () => {
    const payload: TodoType = {
      id: id,
      content: newTodo,
    };
    dispacth(updateTodo(payload));
    setEditable(false);
  };

  const [editable, setEditable] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(content);
  return (
    <div className="todo">
      <div>
        {editable ? (
          <input
            type="text"
            value={newTodo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewTodo(e.target.value)
            }
          />
        ) : (
          <div key={id}>{content}</div>
        )}
      </div>
      <div className="todo-icons">
        <IoIosRemoveCircleOutline
          className="todo-icon"
          onClick={handleRemoveTodo}
        />
        {editable ? (
          <FaCheck className="todo-icon" onClick={handleUpdateTodo} />
        ) : (
          <FaEdit className="todo-icon" onClick={() => setEditable(true)} />
        )}
      </div>
    </div>
  );
}

export default Todo;
