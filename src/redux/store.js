// Import configureStore from Redux Toolkit
// configureStore helps us create the Redux store easily
import { configureStore } from "@reduxjs/toolkit";

// Import the reducer from taskSlice
import taskReducer from "./taskSlice";

// Create the Redux store
export const store = configureStore({
  reducer: {
    // "tasks" is the name of the global state
    tasks: taskReducer,
  },
});