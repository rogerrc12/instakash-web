import React from 'react';
import Chart from './Chart';
import Icon from '../../../UI/Icon';
import Flip from 'react-reveal/Flip';

import classes from './Mission.module.scss';

const Mission = () => {
  return (
    <article className={classes.MissionWrapper}>
      <section className={classes.Missions}>
        <div className={classes.Mission}>
          <Icon icon={['far', 'flag']} />
          <div className={classes.Content}>
            <h3>Misión</h3>
            <p>Somos la banca financiera que revoluciona la forma de administrar el dinero a través de una plataforma 100% digital, sencilla, amigable y de confianza. Integrando a su vez la importancia de impulsar la educación financiera.</p>
          </div>
        </div>
        <div className={classes.Mission}>
          <Icon icon={['far', 'eye']} />
          <div className={classes.Content}>
            <h3>Visión</h3>
            <p>Ser reconocidos en toda Latinoamérica como la primera banca financiera 100% digital que utiliza la última tecnología existente para poder ofrecer productos y servicios financieros innovadores, siendo además referentes de llevar un sistema de educación financiera.</p>
          </div>
        </div>
        <div className={classes.Mission}>
          <Icon icon={['far', 'sun']} />
          <div className={classes.Content}>
            <h3>¿Como Surgió?</h3>
            <p>Instakash nace al ver la carencia de apoyo financiero sobre todo en latinoamérica por parte de las entidades bancarias a sus usuarios. Nuestro principal objetivo es brindar apoyo a todas las personas que buscan mejorar o aprender a llevar mejor sus finanzas, ofreciendoles diversos servicios bancarios a comisiones con las tasas más bajas, demostrarndoles a su vez lo importante que es hoy dia tener una buena educación financiera.</p>
          </div>
        </div>
      </section>
      <Flip left delay={400}>
        <Chart />
      </Flip>
    </article>
  )
}

export default Mission
