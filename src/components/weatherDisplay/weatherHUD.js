import React, { Component } from 'react';
import styled, {css}  from 'styled-components';

const WeatherHUD = props => {

    const weather = props.weather;

    function celsiusConversion(temp) {
        let celsius = temp - 273.15;
        return celsius.toFixed(1);
    }

    const HUD = styled.div`
    width: 600px;
    max-width: 100%;
    height: 50vh;
    margin-top: 5vh;
    color: white;
    font-weight: 600;
    text-align: center;

    h1 {
        font-size: 50px;
        font-weight: 900;
        margin: 2vw 0 0;
    }

    h2 {
        font-size: calc(3vw + 60px);
        font-weight: 600;
        margin: 1vw 0;
    }
  `;


  return (
    <HUD>
        <h2>{weather.weather[0].main}</h2>
        <h1>{celsiusConversion(weather.main.temp)}°C</h1>
        <p>Feels like {celsiusConversion(weather.main.feels_like)}°C</p>
        <p>{weather.name}</p>
    </HUD>
  );
};

export default WeatherHUD;