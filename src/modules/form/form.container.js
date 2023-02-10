import React from "react";
import { reduxForm } from "redux-form";
import FormComponent from "./form.component";
import { useNavigate } from "react-router-dom";

export const FormContainer = ({ handleSubmit }) => {
  const navigate = useNavigate();
  return (
    <>
      <FormComponent  />
    </>
  );
};
const formConfiguration = {
  form: "my-very-own-form",
};
export default reduxForm(formConfiguration)(FormContainer);
