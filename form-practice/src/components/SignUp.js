const SignUp = ({ formData, handleOnChange, handleOnSubmit }) => {
    return (
        <form onSubmit={handleOnSubmit} className="form">
            <div className="form__wrap">
                <input
                    name="firstName"
                    onChange={handleOnChange}
                    value={formData.firstName}
                    type="text"
                    placeholder="First Name"
                    className="form__input" />
            </div>
            <div className="form__wrap">
                <input
                    name="lastName"
                    onChange={handleOnChange}
                    value={formData.lastName}
                    type="text"
                    placeholder="Last Name"
                    className="form__input" />
            </div>
            <div className="form__wrap">
                <input
                    name="email"
                    onChange={handleOnChange}
                    value={formData.email}
                    type="email"
                    placeholder="Email"
                    className="form__input" />
            </div>

            <div className="form__wrap">
                <textarea
                    name="comments"
                    onChange={handleOnChange}
                    value={formData.comments}
                    placeholder="Comments"
                    className="form__input" />
            </div>
            <div className="form__wrap">
                <input
                    id="isChecked"
                    name="isChecked"
                    onChange={handleOnChange}
                    checked={formData.isChecked}
                    type="checkbox"
                    className="form__input" />
                <label htmlFor="isChecked">I agree with your policy</label>
            </div>
            <fieldset>
                <div className="form__wrap">
                    <input
                        id="student"
                        name="experience"
                        type="radio"
                        checked={formData.experience === "student"}
                        value="student"
                        onChange={handleOnChange}
                    />
                    <label htmlFor="student">Student</label>

                </div>
                <div className="form__wrap">
                    <input
                        type="radio"
                        id="unemployed"
                        value="unemployed"
                        name="experience"
                        checked={formData.experience === "unemployed"}
                        onChange={handleOnChange}
                    />
                    <label>Unemployed</label>

                </div>
                <div className="form__wrap">
                    <input
                        type="radio"
                        id="employed"
                        name="experience"
                        value="employed"
                        onChange={handleOnChange}
                        checked={formData.experience === "employed"}
                    />
                    <label htmlFor="employed">Employed</label>

                </div>

            </fieldset>
            <select
                id="fruit"
                name="fruit"
                value={formData.fruit}
                onChange={handleOnChange}>
                <option value="">Select option</option>
                <option value="orange">orange</option>
                <option value="apple">Apple</option>
                <option value="pineapple">Pineapple</option>
            </select>
            <br />
            <button type="submit">submit</button>
        </form>
    );
}
export default SignUp;