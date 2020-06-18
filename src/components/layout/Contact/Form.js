import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import Input from '../../UI/Input';

import classes from './Form.module.scss';
import { Link } from 'gatsby';

const validationSchema = Yup.object({
  name: Yup.string().required('Debes introducir tu nombre.').min(2, 'El nombre es muy corto.').max(20, 'El nombre es muy largo.'),
  email: Yup.string().required('Debes introducir tu correo.').email('Debes introducir un correo válido.'),
  message: Yup.string().required('Debe escribir un mensaje.').min(25, 'Deben ser mínimo 25 caracteres.').max(200, 'No debe superar los 200 caracteres.')
});

const ContactForm = () => {
  return (
    <div className={classes.Form}>
      <Formik initialValues={{ name: '', email: '', message: '' }} validationSchema={validationSchema} onSubmit={values => console.log(values)}>
      {({ touched, isValid, errors }) =>
        <Form>
          <Input name="name" type="text" as="input" error={errors.name} touched={touched.name}
            label="Nombre completo" placeholder="Ingresa tu nombre aquí..."
          />
          <Input name="email" type="email" as="input" error={errors.email} touched={touched.email}
            label="Correo electrónico" placeholder="Ingresa tu email..."
          />
          <Input name="message" as="textarea" error={errors.message} touched={touched.message}
            label="Mensaje" placeholder="Escribe tu mensaje aquí..."
          />
          <button type="submit" className="btn" disabled={!isValid}>Enviar mensaje</button>
          <small>By clicking “Submit Message” you agree to receive marketing communication from us in accordance with out{" "} 
            <Link to="/politicas de privacidad">Privacy Policy.</Link>
          </small>
        </Form>
      }
      </Formik>
    </div>
  )
}

export default ContactForm
