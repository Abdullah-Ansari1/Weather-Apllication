import React from 'react'
import "./CurrentData.css"

const CurrentData = ({location,data,temperature,main}) => {
  return (
    <>
     <div>
    <section className="box widget locations">
      <div className="avatar">
        <img src={data.icon} alt="Icon" />
      </div>
      <div className="details">
        <h1>{location}</h1>
        <h2>{data.text}</h2>
      </div>
      <section className="box widget weather">
          <header className="header">
            <div className="temp">{temperature} °C</div>
            <span className="icon-partlycloudy"></span>
          </header>
          <article>
            <h2>Today</h2>
          </article>
          {main?<div className='extra-data'>
  <h5 className='small-icon'>Clouds:{main.current.cloud}%</h5>
  <h5 className='small-icon'>Humidity:{main.current.humidity}%</h5>
  <h5 className='small-icon'>Gust:{main.current.gust_kph}Kph</h5>
  <h5 className='small-icon'>Feels like:{main.current.feelslike_c}°C</h5>
  </div>:null}
        </section>
    </section>
  </div>
    </>
  )
}

export default CurrentData