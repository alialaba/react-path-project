import { useState } from "react";
const Form = ({ addNewTask }) => {
    const [formData, setFormData] = useState(
        {
            text: "",
            day: "",
            reminder: true
        }
    )

    const handleOnChange = (event) => {
        const { name, value, type, checked } = event.target
        // setFormData(prevFormData =>)
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if (!formData.text) {
            alert("Please fill out the fields");
            return
        }
        addNewTask({ ...formData })
        setFormData({
            text: "",
            day: "",
            reminder: false

        })

    }
    return (
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <input
                    type="text"
                    name="text"
                    value={formData.text}
                    onChange={handleOnChange}
                    placeholder="Task"
                />

            </div>
            <div className="form-control">
                <input
                    type="text"
                    name="day"
                    value={formData.day}
                    onChange={handleOnChange}
                    placeholder="Day & Time"
                />

            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input
                    type="checkbox"
                    name="reminder"
                    checked={formData.reminder}
                    onChange={handleOnChange}
                />

            </div>
            <button className="btn btn-block">Save task</button>
        </form>
    );
}
export default Form;