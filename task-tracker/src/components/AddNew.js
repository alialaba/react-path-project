const addNew = () => {
    return (
        <form>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder="Day & Time" />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" />
            </div>

            <input type="submit" value="Add Task" className="btn btn-block" />
        </form>
    );
};

export default addNew;
