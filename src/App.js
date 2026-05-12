// Import React
import React from "react";

// Import components
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

// Import CSS
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Application title */}
      <h1>Redux ToDo App</h1>

      {/* Component for adding tasks */}
      <AddTask />

      {/* Component for displaying tasks */}
      <ListTask />
    </div>
  );
}

export default App;