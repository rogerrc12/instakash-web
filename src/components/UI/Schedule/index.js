import React from 'react';
import { useFetch } from '../../../hooks';

const Schedule = () => {
  const { response: schedule }  = useFetch(`https://app.instakash.net/home/getSchedule`, 
    { headers: { 'Content-Type':'application/json' } }, 'post');

  let scheduleTime;
  if (!schedule) {
    scheduleTime = 'Lunes a Viernes: 9AM a 6PM y Sábados: 8AM a 2PM'
  } else {
    scheduleTime = schedule;
  }

  return (
    <div>
      <h4>Horario de Atención</h4>
      <p>{scheduleTime}</p>
    </div>
  );
}

export default Schedule
