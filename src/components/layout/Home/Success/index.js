import React from 'react';
import { useFetch } from '../../../../hooks';
import Badge from '../../../UI/Badge';
import Logo from '../../../../assets/images/logo-blanco.svg';

import classes from './Success.module.scss';

const Success = () => {
  const { response: counters } = useFetch('https://cors-anywhere.herokuapp.com/https://app.instakash.net/home/counters', 
    { headers: { 'Content=Type':'application/json' } }, 'post');

  return (
    <article className={classes.Success + " main-article"}>
      <div className="container">
        <img src={Logo} alt="Instaksh" />
        <p>Ahorra cambiando dólares. Dale el valor que merece cada moneda. Plataforma 100% digital.</p>
        <div className={classes.Badges}>
          <Badge icon={['fas', 'chart-line']} small="Operations Registradas" content={`+ ${counters && counters.ContOp}`} number transparent />
          <Badge icon={['fas', 'users']} small="Usuarios Activos" content={counters && counters.ContUsers} number transparent />
          <Badge icon={['fas', 'credit-card']} small="Soles Transferidos" content={`+ ${counters && counters.ContMoney}`} number transparent />
        </div>
      </div>
    </article>
  )
}

export default Success
