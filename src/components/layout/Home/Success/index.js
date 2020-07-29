import React from 'react';
import { useFetch } from '../../../../hooks';
import Badge from '../../../UI/Badge';
import Logo from '../../../../assets/images/logo-blanco.svg';

import classes from './Success.module.scss';

const Success = () => {
  const { response: counters } = useFetch(`https://app.instakash.net/home/counters`, 
    { headers: { 'Content=Type':'application/json' } }, 'post');

  return (
    <article className={classes.Success + " main-article"}>
      <div className="container">
        <img src={Logo} alt="Instaksh" />
        <h2>Con nosotros ahorrarás cambiando dolares. <br /> <span>Resgistrate en nuestra plataforma 100% digital y dale el valor que merece tu dinero.</span></h2>
        <div className={classes.Badges}>
          <Badge icon="icon fas fa-chart-line" small="Operaciones Registradas" content={`+ ${counters && counters.ContOp}`} number transparent />
          <Badge icon="icon fas fa-users" small="Usuarios Activos" content={counters && counters.ContUsers} number transparent />
          <Badge icon="icon fas fa-credit-card" small="Soles Transferidos" content={`+ ${counters && counters.ContMoney}`} number transparent />
        </div>
      </div>
    </article>
  )
}

export default Success
