import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const initialValues = { name: "", email: "", phone: "", department: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("Employee registered successfully:", formValues);
    }
  }, [formErrors, formValues, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneRegex = /^\d{10}$/;

    if (!values.name) {
      errors.name = "Name is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
       } else if (!emailRegex.test(values.email)) {
      errors.email = "Invalid email format!";
    }

    if (!values.phone) {
      errors.phone = "Phone is required!";
    } else if (!phoneRegex.test(values.phone)) {
      errors.phone = "Phone must be 10 digits!";
    }

    if (!values.department) {
      errors.department = "Department is required!";
    }

    return errors;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Employee Registration</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formValues.name}
              onChange={handleChange}
            />
            <p className="error">{formErrors.name}</p>
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
            <p className="error">{formErrors.email}</p>
          </div>

          <div className="field">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formValues.phone}
              onChange={handleChange}
            />
            <p className="error">{formErrors.phone}</p>
          </div>

          <div className="field">
            <label>Department</label>
            <input
              type="text"
              name="department"
              placeholder="Department"
              value={formValues.department}
              onChange={handleChange}
            />
             <p className="error">{formErrors.department}</p>
          </div>

          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;






