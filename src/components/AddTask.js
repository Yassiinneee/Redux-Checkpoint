// Import React and useState hook
import React, { useState } from "react";

// Import useDispatch hook
// useDispatch allows us to send actions to Redux
import { useDispatch } from "react-redux";

// Import addTask action
import { addTask } from "../redux/taskSlice";

function AddTask() {
  // State for input value
  const [description, setDescription] = useState("");

  // Initialize dispatch
  const dispatch = useDispatch();

  // Function to add new task
  const handleAdd = () => {
    // Prevent adding empty tasks
    if (description.trim() === "") {
      return;
    }

    // Create task object
    const newTask = {
      // Unique id using Date.now()
      id: Date.now(),

      // Task description
      description,

      // Default status
      isDone: false,
    };

    // Send action to Redux store
    dispatch(addTask(newTask));

    // Clear input after adding
    setDescription("");
  };

  return (
    <div className="add-task">
      {/* Input field */}
      <input
        type="text"
        placeholder="Enter task..."
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      {/* Add button */}
      <button onClick={handleAdd}>
        Add Task
      </button>
    </div>
  );
}

export default AddTask;