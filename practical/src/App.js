import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Tasks from './components/Tasks';
import Form from './components/Form';
const App = () => {
    const [tasks, setTasks] = useState([]);
    const [showOnAdd, setShowOnAdd] = useState(false);


    useEffect(() => {
        const getTasks = async () => {
            const fetchFromServer = await fetchTasks();
            setTasks(fetchFromServer);
        }
        getTasks();
    }, [])

    //Fetch Tasks
    const fetchTasks = async () => {
        const res = await fetch("http://localhost:5000/tasks");
        const data = await res.json();
        return data;
    }

    //Fetch Task
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`);
        const data = await res.json();
        return data;
    }

    //Delete task
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: "DELETE"
        })
        setTasks(tasks.filter((tasks) => tasks.id !== id))
    }
    //Add Task
    const addTask = async (task) => {
        const res = await fetch("http://localhost:5000/tasks", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(task)
        })
        const data = await res.json()
        setTasks([...tasks, data])
    }

    const onToggle = async (id) => {
        const fetchTaskFrom = await fetchTask(id);
        const updated = { ...fetchTaskFrom, reminder: !fetchTaskFrom.reminder };

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(updated)
        })
        const data = await res.json()

        setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))

    }
    return (
        <div className="container">
            <Header onAdd={() => setShowOnAdd(!showOnAdd)} onShow={showOnAdd} />
            {showOnAdd && < Form addNewTask={addTask} />}
            <Tasks
                tasks={tasks}
                onDelete={deleteTask}
                onToggle={onToggle}
            />
        </div>
    );

}
export default App