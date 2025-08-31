import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);  // State to hold tasks
  const [newTask, setNewTask] = useState(""); // State to track input value

  // Add task
  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  // Delete task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>📝 To-Do List</h2>

      <input
        type="text"
        value={newTask}
        placeholder="Enter task"
        onChange={(e) => setNewTask(e.target.value)}
        style={{ padding: "5px", marginRight: "10px" }}
      />
      <button onClick={addTask}>Add Task</button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            {task}{" "}
            <button onClick={() => deleteTask(index)}>❌ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
