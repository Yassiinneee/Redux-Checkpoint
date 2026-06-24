# Redux ToDo App

A modern ToDo application built with React and Redux Toolkit that demonstrates state management using Redux. Users can add tasks, edit tasks, mark tasks as completed, and filter tasks based on their status.

---

## Project Overview

This project was created as part of a Redux checkpoint to practice:

- Redux Toolkit
- React Redux
- Global State Management
- Action Dispatching
- Reducers
- React Functional Components
- Hooks (useState, useDispatch, useSelector)

The application stores and manages all tasks through a centralized Redux store.

---

## Features

### Task Management

✔ Add new tasks

✔ Edit existing tasks

✔ Mark tasks as completed

✔ Mark tasks as not completed

✔ Real-time UI updates through Redux state

---

### Task Filtering

Users can filter tasks by:

- All Tasks
- Completed Tasks
- Non-Completed Tasks

---

### Redux Toolkit Implementation

The application uses:

- createSlice()
- configureStore()
- useDispatch()
- useSelector()

for clean and scalable state management.

---

## Technologies Used

### Frontend

- React
- React DOM

### State Management

- Redux Toolkit
- React Redux

### Styling

- CSS

### Development Environment

- Create React App

---

# Project Structure

```text
Redux-Checkpoint-main
│
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
│
├── src
│   │
│   ├── components
│   │   ├── AddTask.js
│   │   ├── ListTask.js
│   │   └── Task.js
│   │
│   ├── redux
│   │   ├── store.js
│   │   └── taskSlice.js
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

# Application Architecture

## Redux Store

The Redux store is configured in:

```javascript
src/redux/store.js
```

Responsibilities:

- Creates the global store
- Registers reducers
- Provides application-wide state

---

## Task Slice

Located in:

```javascript
src/redux/taskSlice.js
```

Handles:

### Initial State

```javascript
{
  taskList: [],
  filter: "all"
}
```

### Reducers

#### addTask()

Adds a new task to the store.

#### toggleDone()

Changes task status between:

- Completed
- Not Completed

#### editTask()

Updates task description.

#### setFilter()

Changes the active filter.

---

# Components

## AddTask Component

File:

```javascript
src/components/AddTask.js
```

Responsibilities:

- Captures user input
- Creates new task objects
- Dispatches addTask action

---

## ListTask Component

File:

```javascript
src/components/ListTask.js
```

Responsibilities:

- Retrieves tasks from Redux store
- Retrieves current filter
- Filters tasks dynamically
- Renders Task components

---

## Task Component

File:

```javascript
src/components/Task.js
```

Responsibilities:

- Displays task details
- Toggles completion state
- Enables editing mode
- Saves updated task descriptions

---

# Redux Data Flow

```text
User Action
     │
     ▼
Component Dispatches Action
     │
     ▼
Redux Reducer
     │
     ▼
Store State Updated
     │
     ▼
UI Automatically Re-renders
```

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
```

## Navigate to Project

```bash
cd Redux-Checkpoint-main
```

## Install Dependencies

```bash
npm install
```

---

# Running the Application

Start the development server:

```bash
npm start
```

The application will run on:

```text
http://localhost:3000
```

---

# Available Scripts

### Start Development Server

```bash
npm start
```

### Run Tests

```bash
npm test
```

### Create Production Build

```bash
npm run build
```

### Eject CRA Configuration

```bash
npm run eject
```

---

# Example Workflow

### Add a Task

1. Enter task description.
2. Click "Add Task".
3. Task appears in the list.

### Complete a Task

1. Click checkbox.
2. Task becomes completed.

### Edit a Task

1. Click "Edit".
2. Update text.
3. Click "Save".

### Filter Tasks

Choose:

- All
- Done
- Not Done

to view specific tasks.

---

# Learning Objectives Achieved

- Redux Store Creation
- Redux Toolkit Usage
- Slice Management
- Action Dispatching
- State Selection with useSelector
- State Updates with Reducers
- React Component Communication
- Global State Management
- Filtering Data with Redux

---

# Author

Developed as part of a Redux Toolkit checkpoint project to demonstrate modern React state management techniques and best practices.
