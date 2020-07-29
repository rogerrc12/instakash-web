import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import Cleave from 'cleave.js/react';

import classes from './Input.module.scss';

const Input = ({ condition, selected, changed, receiving, error }) => {

  return (
    <>
      <div className={classes.InputControl}>
        <div className={classes.FloatLabel}>
          <label htmlFor="envias" className={error ? classes.ErrorLabel : ''}>Envias</label>
          <Field id="envias" name="sending">
            {({ field, form }) =>
            <Cleave
              className={classes.Error}
              value={field.value}
              options={{ numeral: true, numeralDecimalMark: ".", delimiter: "", numericOnly: true }}
              onChange={e => { 
                changed(e);
                form.setFieldValue(field.name, +e.target.rawValue)
              }}
            />}
          </Field>
        </div>
        <select value={condition === "buying" ? "PEN" : "USD"} onChange={selected}>
          <option value="USD">Dólares</option>
          <option value="PEN">Soles</option>
        </select>
      </div>
      <div className={classes.InputControl}>
        <div className={classes.FloatLabel}>
          <label htmlFor="recibes">Recibes</label>
          <Cleave
            disabled
            value={receiving}
            options={{ numeral: true, numeralDecimalMark: ".", delimiter: "", numericOnly: true }}
          />
        </div>
        <select value={condition === "buying" ? "USD" : "PEN"} onChange={selected}>
          <option value="USD">Dólares</option>
          <option value="PEN">Soles</option>
        </select>
      </div>
    </>
  )
}

Input.proptTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

export default Input
