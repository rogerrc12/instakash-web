import React from 'react';
import { useFetch } from '../../hooks';
import { Tooltip } from 'antd';
import 'antd/dist/antd.css'; 
import '@fortawesome/fontawesome-free/css/all.css';

import classes from './Limits.module.scss';

const info = <small><b>Contáctanos por un precio preferencial al chat en línea, whatsapp o al correo. <br /> Confirma si tu banco te permite realizar una operación del monto deseado.</b></small>

const Limits = () => {
  const { response: limits } = useFetch(`https://app.instakash.net/home/getLimits`, null, 'post');

  return (
    <div className={classes.Limits}>
      <Tooltip placement="top" title={info}>
        <span className="far fa-question-circle" />
      </Tooltip>
      <p>Monto mayor a <br />
        {!limits ? '$ 10,000 o S. / 30,000' : `${limits[0].Symbol} ${limits[0].Limit} o ${limits[1].Symbol} ${limits[1].Limit}`} ?
      </p>
    </div>
  )
}

export default Limits
