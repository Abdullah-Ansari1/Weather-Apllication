import React,{useEffect,useState} from 'react'
import { fetchFromAPI } from './api';
import CurrentData from './CurrentData/CurrentData';
import ForecastData from './ForecastData/ForecastData';
import {countries} from "./countriesdata";
const App = () => {
  const [data, setData] = useState("");
  const [loader, setLoader] = useState(false);
  const [main, setMain] = useState("");
  const [country, setCountry] = useState('Pakistan');
  const [temperature, setTemperature] = useState("");
  const [location, setLocation] = useState("");
  const [forData, setForData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const result=await fetchFromAPI(country);
      //setting usestates
      setMain(result);
      setForData(result.forecast.forecastday);
      setData(result.current.condition);
      setTemperature(result.current.temp_c);
      setLocation(result.location.name);
      setLoader(true);
    };
    fetchAPI();
  }, [country]);
  const handleChange=(e)=>{
    setCountry(e.target.value);
    setLoader(false);
  }
  return (
    <>
<div style={{marginLeft:"10px",marginRight:"10px"}}>
<div>
    <div className="box header-box">
      <ul>
        <li>
<h1>Weather Application</h1>
<span></span>
        </li>
       
        <li>       
  <h3>Select country</h3>
  <select onChange={(e)=>handleChange(e)} className="selection-box">
    <option value="">Pakistan</option>
    {countries.map((item,index)=>(
    <option value={item} key={index}>{item}</option>
    ))}
  </select>
        </li>
      </ul>
    </div>
  </div>
{loader?<div><CurrentData main={main} temperature={temperature} data={data} location={location}/>
<h1>Forcast</h1>
<ForecastData forData={forData}/>
</div>
:"Loading..."}
</div>
    </>
  )
}

export default App