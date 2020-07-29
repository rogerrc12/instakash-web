import React from 'react';
import Mailchimp from 'react-mailchimp-form'

import classes from './Newsletter.module.scss';

const Newsletter = () => {
  return (
    <div className={classes.Newsletter}>
      <h4>Subscribirme</h4>
      <p>Subscribete para obtener ofertas especiales sobre finanzas y el tipo de cambio. <strong>No pierdas la oportunidad</strong></p>
      <Mailchimp
        action='https://instakash.us10.list-manage.com/subscribe/post?u=cda87dfe90b6df7af0cd2a372&amp;id=bfec836ce4'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          }
        ]}
        messages = {
          {
            sending: "Enviando...",
            success: "Gracias por subscribirte a nuestras promociones!",
            error: "A ocurrido un error inesperado.",
            empty: "Debes agregar tu correo electrónico.",
            duplicate: "Ya este correo se encuentra registrado",
            button: "Subscribirme"
          }
        }

        className={classes.NewsletterForm}
      />
    </div>
  )
}

export default Newsletter
