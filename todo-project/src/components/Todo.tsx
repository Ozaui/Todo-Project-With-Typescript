import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
// import { FaCheck } from "react-icons/fa";
import { todoProps } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById } from "../redux/todoSlice";

function Todo({ todoProps }: todoProps) {
  const { id, content } = todoProps;
  const dispacth = useDispatch();
  const handleRemoveTodo = () => {
    dispacth(removeTodoById(id));
  };
  return (
    <div className="todo">
      <div key={id}>{content}</div>
      <div className="todo-icons">
        <IoIosRemoveCircleOutline
          className="todo-icon"
          onClick={handleRemoveTodo}
        />
        <FaEdit className="todo-icon" />
      </div>
    </div>
  );
}

export default Todo;
