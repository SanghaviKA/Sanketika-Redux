import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

export const FormComponent = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({});

  const handleInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleReset = () => {
    setFormValues({});
  };

  return (
    <div className="flex flex-column justify-center items-center">
      <h1>My Very own Form</h1>
      <form className="w-80">
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            required
            onChange={handleInputChange}
            value={formValues.firstName || ""}
          />
        </label>
        <br />
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            onChange={handleInputChange}
            value={formValues.lastName || ""}
          />
        </label>
        <br />
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            onChange={handleInputChange}
            value={formValues.age || ""}
          />
        </label>
        <br />
        <br />
        <label>
          Gender:
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleInputChange}
            checked={formValues.gender === "male"}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleInputChange}
            checked={formValues.gender === "female"}
          />{" "}
          Female
        </label>
        <br />
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            value={formValues.email || ""}
          />
        </label>
        <br />
        <br />
        <label>
          Date of Birth:
          <input
            type="date"
            name="dob"
            onChange={handleInputChange}
            value={formValues.dob || ""}
          />
        </label>
        <br />
        <br />

        <button
          type="submit"
          onClick={(e) => {
            console.log("formValues" + JSON.stringify(formValues));
            navigate("/form", { state: { formValues } });
            console.log("invoked.." + e.target.value);
          }}
        >
          Submit
        </button>
        <button type="reset" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
