// import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NextPage = () => {
  const location = useLocation();
  const { formValues } = location.state || { formValues: {} };

  const handleReset = () => {
    localStorage.setItem("formValues", JSON.stringify(formValues));
    window.location.reload();
  };

  return (
    <div>
      <h1>Form Data</h1>
      <p>First Name: {formValues.firstName}</p> 
      <p>Last Name: {formValues.lastName}</p>
      <p>Age: {formValues.age}</p>
      <p>Gender: {formValues.gender}</p>
      <p>Email: {formValues.email}</p>
      <p>Date of Birth: {formValues.dob}</p>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default NextPage;


