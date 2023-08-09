import React, { useState } from "react";
import TempTop from "./TempTop";
import TempBottom from "./TempBottom";

const Weather = ({ weatherInfo }) => {
   const [isCelsius, setIsCelsius] = useState(true);
   const handleChangeUnitTemp = () => {
      setIsCelsius(!isCelsius);
   };

   return (
      <section className=" text-center">
         <h2 className="text-center text-[32px] font-bold">
            {weatherInfo?.name}
         </h2>
         <section className={`grid gap-4 sm:grid-cols-[auto_auto]`}>
            {/* Seccion superior */}
            <TempTop weatherInfo={weatherInfo} isCelsius={isCelsius} />

            {/* Seccion inferior */}
            <TempBottom weatherInfo={weatherInfo} />
         </section>
         <button
            onClick={handleChangeUnitTemp}
            className="text-blue-700 mt-4 bg-white  rounded-[19px] w-[134px] h-[30px] drop-shadow-lg text-center"
         >
            {isCelsius ? "Cambiar a F" : "Cambiar a C"}
         </button>
      </section>
   );
};

export default Weather;
