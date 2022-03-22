import { useState, useEffect } from "react";


import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddNew from "./components/AddNew";

const App = () => {
  const [showOnAdd, setShowOnAdd] = useState(false);
  const [tasks, setTasks] = useState([])
  const [darkMode, setDarkMode] = useState(false);

  //when ever page loads
  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    }
    getTasks();
  }, []);

  //toggle Dark mode
  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  }
  //fetch tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    // console.log(data);
    return data;
  }

  //fetch tasks
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    // console.log(data);
    return data
  }

  //Add task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",

      },
      body: JSON.stringify(task)
    })
    const data = await res.json();
    setTasks([...tasks, data])

  }

  //delete task function
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    })
    //filter method will return id that is not clicked
    setTasks(tasks.filter((task) => task.id !== id));
  }

  //toggle reminder function
  const toggleReminder = async (id) => {
    const taskToTogggle = await fetchTask(id);
    const updateTask = { ...taskToTogggle, reminder: !taskToTogggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateTask)
    })

    const data = await res.json();
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))
  }

  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      {/* onAdd  set to the oppsite of the setShowAdd value*/}
      <Header
        onAdd={() => setShowOnAdd(!showOnAdd)}
        onShow={showOnAdd}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      {showOnAdd && <AddNew onAdd={addTask} />}
      {tasks.length > 0 ?
        <Tasks
          onDelete={deleteTask}
          onToggle={toggleReminder}
          tasks={tasks}
          darkMode={darkMode}
        />
        : "No available task"
      }
    </div>
  );
}
export default App