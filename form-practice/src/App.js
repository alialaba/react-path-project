import SignUp from "./components/SignUp";
import { useState } from "react";

const App = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isChecked: false,
    experience: "",
    fruit: ""
  })



  const signUpHandle = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value //[name] was destructured so as not to encounter name not defined
      }
    })
  }

  const submitHandle = (e) => {
    e.preventDefault()
    // setFormData("")
    console.log(formData)
  }
  return (
    <div className="App">
      <SignUp
        formData={formData}
        handleOnChange={signUpHandle}
        handleOnSubmit={submitHandle}

      />
    </div>

  );
}

export default App;
