import Task from "./Task";
const Tasks = ({ tasks,onDelete }) => {
    return (
        <div>
            {tasks.map((task) =>
             <Task 
                onDelete={onDelete}
                key={task.id}
                task={task} />)
            }
        </div >
    );
};

export default Tasks;
