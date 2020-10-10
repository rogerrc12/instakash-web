import React from 'react';
import { Field, ErrorMessage } from 'formik';

import classes from './Input.module.scss';

const Input = (props) => {
  const classesGroup = [classes.Group];
  const classesLabel = [classes.Label];

  if (props.touched && props.error) {
    classesGroup.push(classes.Error);
    classesLabel.push(classes.Error);
  }

  let InputElement;

  if (props.as === 'textarea') {
    InputElement = (
      <Field as={props.as} id={props.name} name={props.name} className={classes.Input} placeholder={props.placeholder} rows='10' />
    );
  } else if (props.as === 'select') {
    InputElement = (
      <Field as={props.as} name={props.name} className={classes.Input}>
        <option value=''>Selecciona una opción</option>
        {props.children}
      </Field>
    );
  } else {
    InputElement = (
      <Field as={props.as} id={props.name} name={props.name} className={classes.Input} placeholder={props.placeholder} type={props.type} />
    );
  }

  return (
    <>
      <div className={classesGroup.join(' ')}>
        <label htmlFor={props.name} className={classesLabel.join(' ')}>
          {props.label}
        </label>
        {InputElement}
      </div>
      <ErrorMessage name={props.name}>{(message) => <span className={classes.ErrorMessage}>{message}</span>}</ErrorMessage>
    </>
  );
};

export default Input;
