import React, { useState, useEffect } from 'react';
import './weatherapp.css';

import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import humidity_icon from '../Assets/humidity.png';
import wind_icon from '../Assets/wind.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';

const Weatherapp = () => {
    const api_key = "e11bcc27df01c387c45e2b01d0e5926b";
    const [weatherData, setWeatherData] = useState(null);

    const fetchData = async () => {
        const element = document.getElementsByClassName('cityinput');
        if (element[0].value === "") {
            return;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();
        setWeatherData(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container">
            <div className="top-bar">
                <input type="text" className='cityinput' placeholder='Enter City' />
                <div className="search_icon" onClick={fetchData}>
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className="weather-img">
                <img src={cloud_icon} alt="" />
            </div>
            <div className="weather-temp">
                {weatherData && `${weatherData.main.temp}°C`}
            </div>
            <div className="weather-location">
                {weatherData && weatherData.name}
            </div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className='icon' />
                    <div className="data">
                        <div className="humidity-percent">
                            {weatherData && `${weatherData.main.humidity}%`}
                        </div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className='icon' />
                    <div className="data">
                        <div className="humidity-percent">
                            {weatherData && `${weatherData.wind.speed}km/h`}
                        </div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
            <p>Created by <span>Sachiya</span></p>
        </div>
    )
}

export default Weatherapp;
