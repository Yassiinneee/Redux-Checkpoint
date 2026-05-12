// Import React
import React from "react";

// Import Redux hooks
import {
  useDispatch,
  useSelector,
} from "react-redux";

// Import Task component
import Task from "./Task";

// Import filter action
import { setFilter } from "../redux/taskSlice";

function ListTask() {
  // Get taskList and filter from Redux store
  const { taskList, filter } = useSelector(
    (state) => state.tasks
  );

  // Initialize dispatch
  const dispatch = useDispatch();

  // Filter tasks depending on selected filter
  const filteredTasks = taskList.filter(
    (task) => {
      // Show only completed tasks
      if (filter === "done") {
        return task.isDone;
      }

      // Show only non-completed tasks
      if (filter === "notDone") {
        return !task.isDone;
      }

      // Show all tasks
      return true;
    }
  );

  return (
    <div>
      {/* Filter buttons */}
      <div className="filters">
        <button
          onClick={() =>
            dispatch(setFilter("all"))
          }
        >
          All
        </button>

        <button
          onClick={() =>
            dispatch(setFilter("done"))
          }
        >
          Done
        </button>

        <button
          onClick={() =>
            dispatch(setFilter("notDone"))
          }
        >
          Not Done
        </button>
      </div>

      {/* Display filtered tasks */}
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
}

export default ListTask;