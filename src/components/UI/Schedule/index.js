import React from "react"

const Schedule = () => {
  let scheduleTime = (
    <span>
      Lunes a Viernes <br /> <b>9AM a 8PM</b> <br /> Sábados y Domingos <br />{" "}
      <b>9AM a 3PM</b>
    </span>
  )

  return (
    <div>
      <h4>Nuestro Horario</h4>
      <p>{scheduleTime}</p>
    </div>
  )
}

export default Schedule
