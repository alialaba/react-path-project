import Task from "./Task";
const Tasks = ({ tasks, onDelete, onToggle, darkMode }) => {
    return (
        <div>
            {tasks.map((task) =>
                <Task
                    onDelete={onDelete}
                    onToggle={onToggle}
                    key={task.id}
                    task={task}
                    darkMode={darkMode}
                />)
            }
        </div >
    );
};

export default Tasks;
