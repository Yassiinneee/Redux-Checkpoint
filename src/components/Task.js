// Import React and useState
import React, { useState } from "react";

// Import Redux hook
import { useDispatch } from "react-redux";

// Import actions
import {
  toggleDone,
  editTask,
} from "../redux/taskSlice";

function Task({ task }) {
  // Initialize dispatch
  const dispatch = useDispatch();

  // State to control edit mode
  const [editMode, setEditMode] = useState(false);

  // State for edited text
  const [newDescription, setNewDescription] =
    useState(task.description);

  // Function to save edited task
  const handleSave = () => {
    // Dispatch edit action
    dispatch(
      editTask({
        id: task.id,
        description: newDescription,
      })
    );

    // Exit edit mode
    setEditMode(false);
  };

  return (
    <div className="task-card">
      {/* Checkbox to toggle done/not done */}
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() =>
          dispatch(toggleDone(task.id))
        }
      />

      {/* If editMode is true */}
      {editMode ? (
        <>
          {/* Input for editing */}
          <input
            type="text"
            value={newDescription}
            onChange={(e) =>
              setNewDescription(e.target.value)
            }
          />

          {/* Save button */}
          <button onClick={handleSave}>
            Save
          </button>
        </>
      ) : (
        <>
          {/* Display task description */}
          <span
            style={{
              // Add line-through if task is done
              textDecoration: task.isDone
                ? "line-through"
                : "none",
            }}
          >
            {task.description}
          </span>

          {/* Edit button */}
          <button
            onClick={() =>
              setEditMode(true)
            }
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
}

export default Task;