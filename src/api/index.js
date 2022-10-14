import axios from "axios";

const url= 'https://weatherapi-com.p.rapidapi.com/forecast.json';
const options = {
  headers: {
    'X-RapidAPI-Key': 'ad019bf606mshb944a0e000faed5p1aa960jsn2803becdad0b',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};
const days='3';
export const fetchFromAPI = async (q) => {
    const { data } = await axios.get(url,{...options,params:{q,days}});

    return data;
}