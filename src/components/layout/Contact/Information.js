import React from 'react';
import Icon from '../../UI/Icon';
import Schedule from '../../UI/Schedule';

import classes from './Information.module.scss';

const Information = () => {
  return (
    <div className={classes.InfoContact}>
      <h1 className="contact-title">Gracias por tu interés en <br /> <span>Instakash</span></h1>
      <p>Estamos siempre innovando, buscando las mejores opciones financieras para ti. Siguenos de cerca y mantente al dia con nuestros temas de educación financiera y nuestros servicios. Para cualquier duda o consulta contáctanos. </p>
      <div className={classes.ContentWrapper}>

        <div className={classes.Information}>
          <Icon icon="fas fa-map-marker-alt" />
          <div className={classes.Content}>
            <h4>Dirección</h4>
            <p>Avenida del Ejército,749, miraflores, Lima INSTAKASH S.A.C. RUC:20605285105</p>
          </div>
        </div>

        <div className={classes.Information}>
          <Icon icon="far fa-clock" />
          <div className={classes.Content + ' ' + classes.Horario}>
            <Schedule />
          </div>
        </div>

      </div>

      <div className={classes.ContentWrapper}>

        <div className={classes.Information}>
          <Icon icon="far fa-envelope" />
          <div className={classes.Content}>
            <h4>Correo</h4>
            <a href="mailto:contacto@instakash.net">contacto@instakash.net</a>
          </div>
        </div>

        <div className={classes.Information}>
          <Icon icon="fas fa-phone-alt" />
          <div className={classes.Content}>
            <h4>Teléfonos</h4>
            <a href="tel:+51929324006">+51 929 324 006</a>
          </div>
        </div>

      </div>

      <div className={classes.ContentWrapper}>

        <div className={classes.Information}>
          <Icon icon="fab fa-instagram" />
          <div className={classes.Content}>
            <h4>Instagram</h4>
            <a href="https://instagram.com/instakashnet" rel="noreferrer" target="_blank">@instakashnet</a>
          </div>
        </div>

        <div className={classes.Information}>
          <Icon icon="fab fa-facebook-f" />
          <div className={classes.Content}>
            <h4>Facebook</h4>
            <a href="https://www.facebook.com/Instakash-103956227716506" rel="noreferrer" target="_blank">@instakash</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Information
