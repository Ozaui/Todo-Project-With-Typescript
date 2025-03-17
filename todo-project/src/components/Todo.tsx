import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
function Todo() {
  return (
    <div className="todo">
      <div>I am first Todo</div>
      <div className="todo-icons">
        <IoIosRemoveCircleOutline className="todo-icon" />
        <FaEdit className="todo-icon" />
      </div>
    </div>
  );
}

export default Todo;
