import { useState } from "react";

const AddNew = ({ onAdd }) => {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert("Hello User, please insert a task");
            return;
        }

        onAdd({ text, day, reminder });
        setText("");
        setDay("");
        setReminder("");

    }
    return (
        <form onSubmit={onSubmit} >
            <div className="form-control">
                <label>Task</label>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add Task" />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input
                    type="text"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    placeholder="Day & Time" />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input
                    checked={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                    type="checkbox" />
            </div>

            <input type="submit" value="Add Task" className="btn btn-block" />
        </form>
    );
};

export default AddNew;
