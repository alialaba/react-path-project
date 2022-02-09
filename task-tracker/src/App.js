import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddNew from "./components/AddNew";

const App = () => {
  const [showOnAdd, setShowOnAdd] = useState(false);
  const [tasks, setTasks] = useState([])

  //when ever page loads

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    }
    getTasks();
  }, []);

  //fetch task
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    // console.log(data);
    return data
  }

  //add task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task }
    setTasks([...tasks, newTask]);
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
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      {/* onAdd  set to the oppsite of the setShowAdd value*/}
      <Header onAdd={() => setShowOnAdd(!showOnAdd)} />
      {showOnAdd && <AddNew onAdd={addTask} />}
      {tasks.length > 0 ?
        <Tasks
          onDelete={deleteTask}
          onToggle={toggleReminder}
          tasks={tasks} />
        : "No available task"
      }
    </div>
  );
}
export default App