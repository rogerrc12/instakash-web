import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import Cleave from "cleave.js/react";

import classes from "./Input.module.scss";

const Input = (props) => {
  let selectValue;

  if (props.condition === "buying" && props.name === "sending") {
    selectValue = "PEN";
  } else if (props.condition === "buying" && props.name === "receiving") {
    selectValue = "USD";
  } else if (props.condition === "selling" && props.name === "sending") {
    selectValue = "USD";
  } else if (props.condition === "selling" && props.name === "receiving") {
    selectValue = "PEN";
  }

  return (
    <>
      <div className={classes.InputControl}>
        <div className={classes.FloatLabel}>
          <label htmlFor="envias" className={props.error ? classes.ErrorLabel : ""}>
            {props.label}
          </label>
          <Field id="envias" name={props.name}>
            {({ field, form }) => (
              <Cleave
                className={classes.Error}
                value={field.value}
                options={{
                  numeral: true,
                  numeralDecimalMark: ".",
                  delimiter: "",
                  numericOnly: true,
                }}
                onChange={(e) => {
                  props.changed(e, field.name);
                  form.setFieldValue(field.name, +e.target.rawValue);
                }}
                disabled={!props.selling && !props.buying}
              />
            )}
          </Field>
        </div>
        <select value={selectValue} onChange={props.selected} disabled={!props.selling && !props.buying}>
          <option value="USD">Dólares</option>
          <option value="PEN">Soles</option>
        </select>
      </div>
    </>
  );
};

Input.proptTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Input;
