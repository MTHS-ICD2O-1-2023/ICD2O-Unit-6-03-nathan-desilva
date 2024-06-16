// Copyright (c) 2024 Nathan De Silva All rights reserved
//
// Created by: Nathan De Silva
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICD2O-Unit-6-03-nathan-desilva/sw.js", {
    scope: "/ICD2O-Unit-6-03-nathan-desilva/sw.js",
  })
}

/**
 * Get API info.
 */
// code from: https://www.youtube.com/watch?v=670f71LTWpM

const getWeather = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData.main.temp)
    const temperature = jsonData.main.temp - 273.15
    const symbol = jsonData.weather[0].icon
    const description = jsonData.weather[0].description
    document.getElementById("api-weather").innerHTML = "The current weather is " + temperature.toFixed(0) + "°C" + "<img src='https://openweathermap.org/img/wn/" + symbol + "@2x.png' alt='Weather Icon' width='15%'>" + "with " + description
  } catch (err) {
    console.log(err)
    document.getElementById("api-weather").innerHTML = "Error fetching current weather."
  }
}


getWeather("https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5")