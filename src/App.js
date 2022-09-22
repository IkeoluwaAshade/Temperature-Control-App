import React, { useState } from 'react'

const App = () => {
  const [temperatureValue, settemperatureValue] = useState (10);
  const [temperatureColor, settemperatureColor] = useState ("cold")



const increaseTemperature = () => {

  if (temperatureValue === 50) return
  settemperatureValue(temperatureValue + 1)

  const newTemperature = temperatureValue + 1;

  if(newTemperature >= 15){
    settemperatureColor('hot'); 
  }

  settemperatureValue(newTemperature);
};

const decreaseTemperature = () => {
  if (temperatureValue === -5) return
  settemperatureValue(temperatureValue - 1)

  const newTemperature = temperatureValue - 1;

  if(newTemperature < 15){
    settemperatureColor('cold'); 
  }

  settemperatureValue(newTemperature);
};

  return (
    <div className='Overall'>

<div className='about-the-app'>
      <h1>About the App</h1>

      <p> Hi Dear! Thank you for checking this out.. I hope you got some value.</p>

      <p> So basically this Temperature App has a range of Temperature between -5°C to 50°C. Once the temperature is below 15°C the color becomes skyBlue which means the temperature is cold. And when the temperature reaches 15°C the color changes to OrangeRed which symbolizes Hotness</p>
    </div>


    <div className='the-Whole-App'>

      <div className='temperature-Display-Holder' >
        <div className={`temperature-Display ${temperatureColor}`}>{temperatureValue}°C</div>

        <div className='button-Holder'>
          <button onClick={() => increaseTemperature()}>+</button>
          <button onClick={() => decreaseTemperature()}>-</button>
        </div>

      </div>

    </div>
    </div>


    
    
  )
}

export default App