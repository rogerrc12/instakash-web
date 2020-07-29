import React from 'react';
import { useFetch } from '../../../hooks';

const Schedule = () => {

  const response = useFetch('https://app.instakash.net/home/getSchedule', null, 'post');
  console.log(response)

  let scheduleTime = <span>Lunes a Viernes <br /> <b>9AM a 6PM</b> <br /> Sábados <br /> <b>8AM a 2PM</b></span>

  return (
    <div>
      <h4>Nuestro Horario</h4>
      <p>{scheduleTime}</p>
    </div>
  );
}

export default Schedule
