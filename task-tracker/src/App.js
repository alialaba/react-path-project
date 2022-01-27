import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddNew from "./components/AddNew";

const App = () => {
  const [showOnAdd, setShowOnAdd] = useState(false);
  const [tasks, setTasks] = useState([
    // {
    //   id: 1,
    //   text: "School Meeting",
    //   day: "Jan 11th at 12pm",
    //   reminder: true
    // },
    // {
    //   id: 2,
    //   text: "Appointment with Doctor",
    //   day: "Jan 12th at 3pm",
    //   reminder: true
    // },
    // {
    //   id: 3,
    //   text: "School Meeting",
    //   day: "Jan 15th at 11am",
    //   reminder: false
    // }
  ])

  //add task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task }
    setTasks([...tasks, newTask]);
  }

  //delete task function
  const deleteTask = (id) => {
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