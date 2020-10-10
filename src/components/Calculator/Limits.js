import React from "react"
import { Tooltip } from "antd"
import "antd/dist/antd.css"
import "@fortawesome/fontawesome-free/css/all.css"

import classes from "./Limits.module.scss"

const info = (
  <small>
    <b>
      Contáctanos por un precio preferencial al chat en línea, whatsapp o al
      correo. <br /> Confirma si tu banco te permite realizar una operación del
      monto deseado.
    </b>
  </small>
)

const Limits = () => {
  return (
    <div className={classes.Limits}>
      <Tooltip placement="top" title={info}>
        <span className="far fa-question-circle" />
      </Tooltip>
      <p>
        Monto mayor a <br />$ 5,000 o S./ 15,000
      </p>
    </div>
  )
}

export default Limits
