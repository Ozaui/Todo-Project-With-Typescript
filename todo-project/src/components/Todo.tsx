import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
// import { FaCheck } from "react-icons/fa";
import { todoProps } from "../types/Types";

function Todo({ todoProps }: todoProps) {
  const { id, content } = todoProps;
  return (
    <div className="todo">
      <div key={id}>{content}</div>
      <div className="todo-icons">
        <IoIosRemoveCircleOutline className="todo-icon" />
        <FaEdit className="todo-icon" />
      </div>
    </div>
  );
}

export default Todo;
