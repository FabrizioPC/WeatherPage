import { useEffect, useState } from "react";
import "./App.css";
import Weather from "./components/Weather";
import axios from "axios";
import bgWeather from "./components/js/bgWeather";

function App() {
   const [weatherInfo, setWeatherInfo] = useState(null);
   const success = (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      const API_KEY = "34c816be79335763132a043a4355dbfe";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=sp`;

      axios
         .get(url)
         .then(({ data }) => setWeatherInfo(data))
         .catch((err) => console.log(err));
   };
   useEffect(() => {
      navigator.geolocation.getCurrentPosition(success);
   }, []);
   const handleSubmit = (e) => {
      e.preventDefault();
      const countryName = e.target.countryName.value;
      const API_KEY = "34c816be79335763132a043a4355dbfe";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${API_KEY}&lang=sp`;
      axios
         .get(url)
         .then(({ data }) => setWeatherInfo(data))
         .catch((err) => console.log(err));
   };

   return (
      <main
         className={`min-h-screen text-black font-lato flex flex-col justify-center items-center px-4 ${
            bgWeather[weatherInfo?.weather[0].icon]
         } bg-cover bg-no-repeat`}
      >
         <div className="min-w-[500px] fill-inherit flex flex-col items-center">
            <form onSubmit={handleSubmit}>
               <input
                  id="countryName"
                  type="text"
                  placeholder="Buscar un pais"
               />
               <button className="p-2 rounded-2xl bg-white text-blue-700">
                  Buscar
               </button>
            </form>
            <Weather weatherInfo={weatherInfo} />
         </div>
      </main>
   );
}

export default App;
