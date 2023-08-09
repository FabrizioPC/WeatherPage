import React from "react";
import iconWeather from "./js/iconWeather";
const TempTop = ({ weatherInfo, isCelsius }) => {
   const kelvinToCelsius = (tempKelvin) => {
      return (tempKelvin - 273.15).toFixed(1);
   };
   const kelvinToFahrenheit = (tempKelvin) => {
      return (((tempKelvin - 273.15) * 9) / 5 + 32).toFixed(1);
   };
   const resultTempConversion = isCelsius
      ? kelvinToCelsius(weatherInfo?.main.temp) + "°C"
      : kelvinToFahrenheit(weatherInfo?.main.temp) + "°F";
   return (
      <section className="bg-white/60 p-2 rounded-2xl grid grid-cols-2 items-center">
         <h2 className="col-span-2 text-2xl">
            {weatherInfo?.weather[0].description}
         </h2>
         <span className="text-4xl">{resultTempConversion}</span>
         <div>
            <img
               className="m-auto"
               src={iconWeather[`${weatherInfo?.weather[0].icon}`]}
               alt=""
            />
         </div>
      </section>
   );
};

export default TempTop;
