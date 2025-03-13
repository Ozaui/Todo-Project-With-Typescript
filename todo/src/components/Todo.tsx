import "../css/Todo.css";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
function Todo() {
  return (
    <div className="todo">
      <div>I am first Todo...</div>
      <div>
        <IoIosRemoveCircleOutline
          className="icons"
          style={{ marginRight: "5px" }}
        />
        <FaRegEdit className="icons" />
      </div>
    </div>
  );
}

export default Todo;
