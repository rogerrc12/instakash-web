import React from 'react';
import Chart from './Chart';
import Icon from '../../../UI/Icon';

import classes from './Mission.module.scss';

const Mission = () => {
  return (
    <article className={classes.MissionWrapper}>
      <section className={classes.Missions}>
        <div className={classes.Mission}>
          <Icon icon={['far', 'flag']} />
          <div className={classes.Content}>
            <h3>Misión</h3>
            <p>Banca digital del segmento FINTECH creada para revolucionar la forma de administrar el dinero por medio de una plataforma sencilla, amigable y de confianza. Integra un grupo de servicios con mayor ventaja a las que ofrecen los bancos tradicionales con la idea de impulsar la importancia de la educación financiera.</p>
          </div>
        </div>
        <div className={classes.Mission}>
          <Icon icon={['far', 'eye']} />
          <div className={classes.Content}>
            <h3>Visión</h3>
            <p>Ser reconocidos en Latinoamérica como la primera plataforma digital financiera con el mejor ofrecimiento de los servicios del universo FINTECH integrados en una sola aplicación.</p>
          </div>
        </div>
        <div className={classes.Mission}>
          <Icon icon={['far', 'sun']} />
          <div className={classes.Content}>
            <h3>¿Como Surgió?</h3>
            <p>Instakash nace al ver la carencia de apoyo financiero a las personas en el mundo (más especifico latinoamérica) por parte de las entidades bancarias. Buscamos apoyar a todas las personas que tienen problemas financieros o buscan aprender a llevar mejor sus finanzas, ofreciendoles diversos servicios bancarios a comisiones nulas o muy bajas y demostrar lo importante que es tener educación financiera hoy dia.</p>
          </div>
        </div>
      </section>
      <Chart />
    </article>
  )
}

export default Mission
