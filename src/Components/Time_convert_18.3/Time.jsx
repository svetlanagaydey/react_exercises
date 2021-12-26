import React, { useState } from 'react';
const Time = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(1);
  const [hours, setHours] = useState(2);

  const onSecondsChange = (event) => {
    setSeconds(event.target.value);
    setMinutes(event.target.value/60);
    setHours(event.target.value/3600);
  }
  const onMinutesChange = (event) => {
    setMinutes(event.target.value);
    setSeconds(event.target.value*60);
    setHours(event.target.value/60);
  }
  const onHoursChange = (event) => {
    setHours(event.target.value);
    setSeconds(event.target.value*3600);
    setMinutes(event.target.value*60);
  }

  return(
    <form>
      <fieldset>
        <legend>Wat's the time?</legend>
        <label htmlFor="">Seconds: </label>
        <input label="Seconds" type="text" name="seconds" value={seconds} onChange={onSecondsChange}/>
        <br />
        <label htmlFor="">Minutes: </label>
        <input label="Minutes" type="text" name="minutes" value={minutes} onChange={onMinutesChange}/>
        <br />
        <label htmlFor="">Hours: </label>
        <input label="Hours" type="text" name="hours" value={hours} onChange={onHoursChange}/>
        <br />
      </fieldset>
    </form>
  )
}
export default Time;