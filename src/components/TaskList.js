import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask }) {
  
  const tasksToDisplay = tasks.map((task, index) => {
    return (
      <Task key={index} text={task.text} category={task.category} deleteTask={deleteTask} />
    );
  })
  
  return (
    <div className="tasks">
      {tasksToDisplay}
    </div>
  );
}

export default TaskList;
