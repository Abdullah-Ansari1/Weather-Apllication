import axios from "axios";

const url= 'https://weatherapi-com.p.rapidapi.com/forecast.json';
const options = {
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};
const days='3';
export const fetchFromAPI = async (q) => {
    const { data } = await axios.get(url,{...options,params:{q,days}});

    return data;
}