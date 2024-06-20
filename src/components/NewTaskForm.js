import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function newTask(event) {
    setText(event.target.value);
  }

  function newCategory(event){
    setCategory(event.target.value);
  }
  
  const options = categories.map((category) => (
    <option key={category}>{category}</option>
  ));

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({ text, category })
    setText("");
    setCategory("Code");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={newTask} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={newCategory}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
