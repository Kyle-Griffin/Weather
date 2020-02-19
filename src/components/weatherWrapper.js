import React, { Component } from 'react';
import styled, {css}  from 'styled-components';

import WeatherHUD from './weatherDisplay/weatherHUD';

const WeatherWrapper = props => {

    const weather = props.weather;

    const Wrapper = styled.div`
    height: 100%;
    background: -webkit-linear-gradient(to top, #fff, #fff); 
    background: linear-gradient(to top, #fff, #fff); 
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    transition: background 0.6s ease 0.2s;

    &.Clouds {
      background: -webkit-linear-gradient(to top, #D7D5D3, #CDCBC8); 
      background: linear-gradient(to top, #D7D5D3, #CDCBC8); 
    }

    &.Rain {
      background: -webkit-linear-gradient(to top, #a6c6d5, #abc4d0); 
      background: linear-gradient(to top, #a6c6d5, #abc4d0); 
    }

    &.Clear {
      background: -webkit-linear-gradient(to top, #7cd1e9, #87cbde); 
      background: linear-gradient(to top, #7cd1e9, #87cbde); 
    }
  `;

  if (weather === undefined) {
      return(
        <Wrapper>
            <p>Weather!</p>
        </Wrapper>
    );
  }


  return (
    <Wrapper className={weather.weather[0].main}>
        <WeatherHUD weather={weather} />
    </Wrapper>
  );

}

export default WeatherWrapper;