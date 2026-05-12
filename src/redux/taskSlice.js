// Import createSlice from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Initial state of our application
const initialState = {
  // Array of tasks
  taskList: [
    {
      id: 1,
      description: "Learn Redux",
      isDone: false,
    },
  ],

  // Default filter
  filter: "all",
};

// Create Redux slice
const taskSlice = createSlice({
  // Slice name
  name: "tasks",

  // Initial state
  initialState,

  // Reducers = functions that modify state
  reducers: {
    // Add a new task
    addTask: (state, action) => {
      // Push new task into taskList array
      state.taskList.push(action.payload);
    },

    // Toggle task status (done/not done)
    toggleDone: (state, action) => {
      // Find task by id
      const task = state.taskList.find(
        (task) => task.id === action.payload
      );

      // Check if task exists
      if (task) {
        // Reverse isDone value
        task.isDone = !task.isDone;
      }
    },

    // Edit task description
    editTask: (state, action) => {
      // Extract id and description from payload
      const { id, description } = action.payload;

      // Find task by id
      const task = state.taskList.find(
        (task) => task.id === id
      );

      // Update description
      if (task) {
        task.description = description;
      }
    },

    // Change filter value
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

// Export actions
export const {
  addTask,
  toggleDone,
  editTask,
  setFilter,
} = taskSlice.actions;

// Export reducer
export default taskSlice.reducer;