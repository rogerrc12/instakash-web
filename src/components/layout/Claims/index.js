import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import emailjs from 'emailjs-com';
import * as Yup from 'yup';
import Input from '../../UI/Input';

import classes from './Claims.module.scss';

const initialValues = {
  name: '',
  fromEmail: '',
  documentType: '',
  documentNo: '',
  companyName: '',
  ruc: '',
  phone: '',
  service: '',
  amount: '',
  description: '',
  formType: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Debes colocar tu nombre.'),
  fromEmail: Yup.string().required('Debes colocar tu correo').email('Ingresa un correo válido.'),
  documentType: Yup.string().required('Debes seleccionar el tipo de documento.'),
  documentNo: Yup.number().required('Debes colocar tu número de documento.'),
});

const Claims = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (values) => {
    setIsLoading(true);

    try {
      const res = await emailjs.send('mailgun_s83u8je', 'reclamaciones_7lcmq3u', values, 'user_3YX2SWczGKnPH9kemL3JF');
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
    <div className={classes.Reclamaciones}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ isValid, values, errors, touched }) => (
          <Form className={classes.Form}>
            <Input name='name' type='text' label='Nombre completo' placeholder='Ingresa tu nombre...' error={errors.name} touched={touched.name} />
            <Input
              name='fromEmail'
              type='email'
              label='Correo electrónico'
              placeholder='Ingresa tu correo...'
              error={errors.fromEmail}
              touched={touched.fromEmail}
            />
            <Input as='select' name='documentType' label='Tipo de documento' error={errors.documentType} touched={touched.documentType}>
              <option value='DNI'>DNI</option>
              <option value='Carnet de extranjeria'>Carnet de extranjeria</option>
              <option value='Pasaporte'>Pasaporte</option>
            </Input>
            <Input name='documentNo' type='text' label='Número de documento' placeholder='Ingresa tu documento...' />
            <Input name='companyName' type='text' label='Razón social (si aplica)' placeholder='Ingresa tu razón social...' />
            <Input name='ruc' type='number' label='RUC (si aplica)' placeholder='Ingresa el RUC...' />
            <Input name='phone' type='text' label='Número de teléfono' placeholder='Ingresa el teléfono...' />
            <Input name='service' as='select' label='Servicio adquirido'>
              <option value='Cambio de divisas (compra)'>Cambio de divisas (compra)</option>
              <option value='Cambio de divisas (venta)'>Cambio de divisas (venta)</option>
              <option value='Avance de efectivo'>Avance de efectivo</option>
            </Input>
            <Input name='amount' type='number' label='Monto cambiado/solicitado' placeholder='Ingresa el monto...' />
            <Input name='formType' as='select' label='Tipo de reclamo'>
              <option value='Queja'>Queja</option>
              <option value='Reclamo'>Reclamo</option>
            </Input>
            <Input as='textarea' name='description' label='Descripción' placeholder='Describe tu mensaje...' />

            {!sent ? (
              <button type='submit' className='btn' disabled={!isValid || isLoading}>
                Enviar {values.formType}
              </button>
            ) : (
              <p className='message success-message'>
                Su solicitud ha sido recibida, será atendida al a brevedad posible y lo contactaremos. Muchas gracias por usar nuestros servicios.
              </p>
            )}
            {error ? <p className='message error-message'>Ha ocurrido un error, por favor intenta de nuevo más tarde.</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Claims;
