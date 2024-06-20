import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function handleCategoryChange(newCategory) {
    setCategory(newCategory);
  }

  function handleDeleteTask(removeTask) {
    const removedTaskList = tasks.filter((task) => (task.text !== removeTask));
    setTasks(removedTaskList);
  }

  function addTask({ text, category }){
    // destructured
    const newTask = {key: text, text, category};
    console.log(newTask)
    setTasks([...tasks, newTask])
  }

  const filteredTasks = tasks.filter((task) => category === "All" || task.category === category)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} changeCategory={handleCategoryChange}/>
      <NewTaskForm onTaskFormSubmit={addTask} categories={CATEGORIES.filter((category) => category !== "All")} />
      <TaskList tasks={filteredTasks} deleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
