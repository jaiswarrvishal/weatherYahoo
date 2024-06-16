
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Styling.css';

<script src="https://kit.fontawesome.com/e375c7e293.js" crossorigin="anonymous"></script>

const YahooWeatherApp = () => {
  const [weatherData, setWeatherData] = useState(); // Initialize weatherData state
  const [city, setCity] = useState('mumbai'); // Initialize city state with a default value
  const [inputCity, setInputCity] = useState(''); // Initialize inputCity state for the input field

  // Function to fetch weather data
  async function GetWeatherData(city) {
    const options = {
      method: 'GET',
      url: 'https://yahoo-weather5.p.rapidapi.com/weather',
      params: {
        location: city,
        format: 'json',
        u: 'f'
      },
      headers: {  
        'x-rapidapi-key': '2edc0bda8dmsh1c0f12dd8f364c5p14faaajsn117b2f016d13', // Actual API key
        'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setWeatherData(response.data); // Set the fetched data to weatherData state
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    GetWeatherData(city); // Fetch weather data on component mount
  }, [city]); // Fetch weather data whenever the city state changes

  // Function to handle form submission
  const handleSearch = (event) => {
    event.preventDefault();
    setCity(inputCity); // Update the city state with the input value
  };

  return (
    <div>
    
    <head><script src="https://kit.fontawesome.com/e375c7e293.js" crossorigin="anonymous"></script></head>
      <h1 >Yahoo!! <br/>Weather-App</h1>
      <form onSubmit={handleSearch}>
        <input 
          type="text"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)} // Update inputCity state on input change
          placeholder="Enter city"
        />
        <button type="submit">Search</button>
      </form>
      <div >
        {weatherData ? (
          <div id ='heroSection'>
            <p id='city'>{weatherData.location.city}</p>
            <p>{weatherData.location.country}</p>
            <strong> {new Date(weatherData.current_observation.pubDate * 1000).toLocaleString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    hour12: true
                  })}
                  </strong>
            {/* {new Date((weatherData.current_observation.pubDate)*1000).toLocaleString()} */}
             <p>(Timezone: {weatherData.location.timezone_id})</p> 
            {/* <p>Region: {weatherData.location.region}</p> */} 
            <p id='cloudy'>{weatherData.current_observation.condition.text}</p>
            {/* <p id='temp'>{convertToFahrenheit(weatherData.current_observation.condition.temperature)} °C</p> */}
            <p id='temp'>{weatherData.current_observation.condition.temperature} °F</p> 
            {/* <p>Condition: {weatherData.current_observation.condition.text}</p> */}
            {/* <p>Timezone: {weatherData.location.timezone_id}</p> */}
          </div>
        ) : (
          <p>Loading...</p> // Loading
        )}
      </div>
    </div>
  );
}

export default YahooWeatherApp;
























// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// const YahooWeatherApp = () => {
// //   const [allProducts, setAllProducts] = useState([]);
// //   console.log(allProducts, "allProducts");
// const [weatherApp, setWeatherApp] = useState([]);
//   console.log(weatherApp, "weatherApp");
//    async function GetProducts(){
//       // alert("Hi from get product")
//     //   const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://yahoo-weather5.p.rapidapi.com/weather',
//   params: {
//     location: 'mumbai',
//     format: 'json',
//     u: 'f'
//   },
//   headers: {
//     'x-rapidapi-key': '8957246ad2mshdcf0342c8c3af22p172658jsn03bcaee265ca',
//     'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
//    }

//   useEffect(()=>{
//     // alert("Hiii");
//     //api call to backend

//     GetProducts();
//   }, []);

//   return (
//     <div>
//         <h1>YahooWeatherApp</h1>
//         <div>
//           {weatherApp.map((weather) => (
//             <div>
//               {/* <p>{weather.current_observation.astronomy.sunrise}</p> */}
//               <p>{ weather.location.city}</p>
//               {/* <p>{weather.forecasts}</p> */}
//               {/* <p>Price: {weather.price}/-</p> */}
//             </div>
//           ))}
//         </div>
//     </div>
//   )
// }

// export default YahooWeatherApp;