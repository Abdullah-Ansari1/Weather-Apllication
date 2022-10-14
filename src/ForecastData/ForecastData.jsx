import React from 'react'
import "./ForecastData.css"
const ForecastData = ({forData}) => {
  return (
    <>
    <div className="forecast-row" >

{forData.map((item,index)=>(
      <section className="box widget locations forecast" key={index}>
      <div className="avatar">
        <img src={item.day.condition.icon} alt="Icon" />
      </div>
      <div className="details">
        <h2>{item.day.condition.text}</h2>
      </div>
      <section className="box widget weather">
          <header className="header">
            <div className="temp">{item.day.maxtemp_c} °C</div>
            <span className="icon-partlycloudy"></span>
          </header>
          <article>
            <h2>{item.date}</h2>
          </article>
        </section>
    </section>
))}
</div>
    </>
  )
}

export default ForecastData