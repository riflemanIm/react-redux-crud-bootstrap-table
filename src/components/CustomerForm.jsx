import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import FieldInput from "./common/FieldInput";
//import SelectInput from "./common/SelectInput";

export const CustomerForm = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
  heading,
  handleSave,
  handleCancel
}) => {
  return (
    <form onSubmit={handleSubmit(handleSave)}>
      <h1>{heading}</h1>

      <Field
        type="text"
        name="name"
        label="Name"
        placeholder="Fill name please"
        component={FieldInput}
      />

      <Field
        type="text"
        name="address"
        label="Address"
        placeholder="Fill address please"
        component={FieldInput}
      />

      <Field
        type="text"
        name="phone"
        label="Phone"
        placeholder="Fill your phone please"
        component={FieldInput}
      />

      <div>
        <button type="submit" disabled={submitting} className="btn btn-primary">
          <i className="fa fa-paper-plane-o" aria-hidden="true" /> Submit
        </button>

        {heading === "Add" && (
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
            className="btn btn-default btn-space"
          >
            Clear Values
          </button>
        )}

        <button
          type="button"
          className="btn btn-default btn-space"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.address) {
    errors.address = "Required";
  }

  if (!values.phone) {
    errors.phone = "Required";
  }

  return errors;
};

reduxForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  heading: PropTypes.string.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired
};

export default reduxForm({
  form: "CustomerForm",
  validate
})(CustomerForm);
