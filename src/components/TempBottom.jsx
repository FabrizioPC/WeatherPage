import React from "react";

const TempBottom = ({ weatherInfo }) => {
   return (
      <section className="bg-white/60 p-2 py-4 rounded-2xl grid grid-cols-3 items-center sm:grid-cols-1">
         <article className="flex gap-2 items-center">
            <div className="w-[18px]">
               <img src={"/images/speed.png"} alt="" />
            </div>
            <span>{weatherInfo?.wind.speed}m/s</span>
         </article>
         <article className="flex gap-2 items-center">
            <div className="w-[18px]">
               <img src={"/images/humidity.png"} alt="" />
            </div>
            <span>{weatherInfo?.main.humidity}%</span>
         </article>
         <article className="flex gap-2 items-center">
            <div className="w-[18px]">
               <img src={"/images/pressure.png"} alt="" />
            </div>
            <span>{weatherInfo?.main.pressure}hPa</span>
         </article>
      </section>
   );
};

export default TempBottom;
