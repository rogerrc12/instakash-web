import React, { useState } from 'react';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { Formik, Form } from 'formik';
import Input from '../../UI/Input';

import classes from './Form.module.scss';
import { Link } from 'gatsby';

const validationSchema = Yup.object({
  name: Yup.string().required('Debes introducir tu nombre.').min(2, 'El nombre es muy corto.').max(20, 'El nombre es muy largo.'),
  email: Yup.string().required('Debes introducir tu correo.').email('Debes introducir un correo válido.'),
  message: Yup.string().required('Debe escribir un mensaje.').min(25, 'Deben ser mínimo 25 caracteres.').max(200, 'No debe superar los 200 caracteres.'),
});

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (values) => {
    setIsLoading(true);

    try {
      const res = await emailjs.send('mailgun_s83u8je', 'contacto_tct9via', values, 'user_3YX2SWczGKnPH9kemL3JF');
      if (res.status === 200) {
        setSent(true);
      }
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={classes.Form}>
      <Formik initialValues={{ name: '', email: '', message: '' }} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ touched, isValid, errors }) => (
          <Form>
            <Input
              name='name'
              type='text'
              as='input'
              error={errors.name}
              touched={touched.name}
              label='Nombre completo'
              placeholder='Ingresa tu nombre aquí...'
            />
            <Input
              name='email'
              type='email'
              as='input'
              error={errors.email}
              touched={touched.email}
              label='Correo electrónico'
              placeholder='Ingresa tu email...'
            />
            <Input name='message' as='textarea' error={errors.message} touched={touched.message} label='Mensaje' placeholder='Escribe tu mensaje aquí...' />
            {!sent ? (
              <>
                <button type='submit' className='btn' disabled={!isValid || isLoading}>
                  Enviar mensaje
                </button>
                <small>
                  Al darle “Enviar mensaje”, aceptas recibir mensajes de promociones y marketing de parte de nosotros.
                  <Link to='/politicas de privacidad'>Politicas de privacidad.</Link>
                </small>
              </>
            ) : (
              <p className='message success-message'>¡Mensaje enviado!. Pronto nos pondremos en contacto.</p>
            )}
            {error ? <p className='message error-message'>Ha ocurrido un error, por favor intenta de nuevo más tarde.</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
