import React, { useEffect, useState } from 'react'

export const Form = () => {
  const [date, setDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState("????-??-??");
  const [formData, setFormData] = useState({
    days: "",
    hours: "",
    minutes: ""
  })

  let intervalId = "";

  useEffect(() => {
    intervalId = setInterval(tick, 1000);
    return () => {clearInterval(intervalId)}
  }, []
  )

  const tick = () => {
    setDate(new Date());
  }

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const days = +formData.days
    const hours = +formData.hours
    const minutes = +formData.minutes

    console.log(days, hours, minutes);
  
    const currentDate = new Date();
  
    calculate(days, hours, minutes, currentDate);
  }

  const calculate = (days, hours, minutes, currentDate) => {
    const daysToHours = days * 24;
    const totalHours = daysToHours + hours;
    const hoursToMinutes = totalHours * 60;
    const totalMinutes = hoursToMinutes + minutes;
    const totalMilliseconds = totalMinutes * 60 * 1000;

    const gettime = currentDate.getTime();

    const newTime = totalMilliseconds + gettime;
    const newDate = new Date(newTime);
  
    displayCalculations(newDate);
  };

  const displayCalculations = (newDate) => {
    const newFormattedDate = formatDate(newDate);
    setFormattedDate(newFormattedDate);
  };

  const formatDate = (date) => {
    const year = date.getFullYear(); // Get the year (four digits)
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get the month (zero-based index, add 1 to get the correct month) and ensure it's two digits
    const day = String(date.getDate()).padStart(2, '0'); // Get the day of the month and ensure it's two digits
    const hours = String(date.getHours()).padStart(2, '0'); // Get the hours and ensure it's two digits
    const minutes = String(date.getMinutes()).padStart(2, '0'); // Get the minutes and ensure it's two digits
    const seconds = String(date.getSeconds()).padStart(2, "0");

    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`; // Concatenate date and time with a space in between
  
    return formattedDateTime;
  };

  return (
    <>
          <section className="display">
        <div> Current date:
          <span id="display-date">{formatDate(date)}</span>
        </div>
      </section>
      <section className="form-container">
        <form id="inputform" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="days">Days</label>
            <input type="text" name="days" value={formData.days} onChange={handleInputChange} placeholder="0" id="days"/>
          </div>
          <div className="form-control">
            <label htmlFor="hours">Hours</label>
            <input type="text" name="hours" value={formData.hours} onChange={handleInputChange} placeholder="0" id="hours"/>
          </div>
          <div className="form-control">
            <label htmlFor="minutes">Minutes</label>
            <input type="text" name="minutes" value={formData.minutes} onChange={handleInputChange} placeholder="0" id="minutes"/>
          </div>
          <div className="form-control-button">
          <input type="submit" value="calculate" className="form-submit"/>
          </div>
        </form>
      </section>

      <section className="calculations">
        <div> Deadline date: 
          <span id="deadline-date">{formattedDate}</span>
        </div>
      </section>
    </>
  )
}
