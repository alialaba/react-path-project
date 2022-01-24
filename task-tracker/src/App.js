import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "School Meeting",
      day: "Jan 11th at 12pm",
      reminder: true
    },
    {
      id: 2,
      text: "Appointment with Doctor",
      day: "Jan 12th at 3pm",
      reminder: true
    },
    {
      id: 3,
      text: "School Meeting",
      day: "Jan 15th at 11am",
      reminder: false
    }
  ])
  //delete task function

  const deleteTask = (id) => {
    //filter method will return id that is not clicked
    setTasks(tasks.filter((task) => task.id !== id))
  }
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ?
       <Tasks
        onDelete={deleteTask}
        tasks={tasks} />
        : "No available task"
      }
    </div>
  );
}
export default App