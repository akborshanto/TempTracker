import React, { useContext } from "react";
import { WetherContext } from "./../hook/WetherContext";

const HourlyForecast = () => {
  const { wetherData } = useContext(WetherContext);

  const nowUtc = new Date();

  const bangladeshTime = nowUtc.getTime() + 6 * 60 * 60 * 1000;

  const bdTimeDate = new Date(nowUtc.getTime() + bangladeshTime);
  const bdTimeString = nowUtc.toLocaleString("en-US", {
    timeZone: "Asia/Dhaka",
  });
  const ampm = bdTimeString.slice(19);
  const {
    temp_c,
    temp_f,
    condition,
    dewpoint_c,
    heatindex_c,
    feelslike_c,
    uv,
    wind_kph,
    pressure_in,
    humidity,
  } = wetherData?.data?.current || {};

  const forecast = wetherData?.data?.forecast?.forecastday[0].astro;
console.log(forecast)
  const sunSunset = wetherData?.data?.forecast?.forecastday[0]?.hour.slice(0,5);

  return (
    <div className=" ">
      <section className=" flex justify-between  p-5 mt-4  selection:text-cyan-500 bg-[rgb(14,20,33)]">
        {/* left side hour forecatr */}
        <div className="flex justify-between items-center w-1/2  bg-[#131826] p-6 rounded-lg shadow-sm shadow-cyan-500 hover:shadow-blue-600 hover:shadow-md">
          <div>
            <h1 className="text-xl font-bold">Hourly Forecast</h1>

            {/* mapping the sunSunsetData */}
            <div className=" grid grid-cols-5 gap-4">
              {sunSunset?.map((i) => (
                <div className="bg-[#21293d] my-4 w-[100px] h-[200px] text-2xl font-bold  text-center rounded-lg  shadow-sm shadow-cyan-500 hover:shadow-blue-600 hover:shadow-md">
                  <h1>{i?.time.slice(12)}</h1>

                  <img
                    src={condition?.icon}
                    alt=""
                    className="my-4 mx-auto w-[90px]"
                  />
                  <h1>{i?.temp_c}° C</h1>
                </div>
              ))}
            </div>
          </div>
          <div>
            {/* card */}

            <div className=" ">
         
                <div key={Math.random()}>
                  <h4 className="text-gray-400 font-bold text-xl">Sunset</h4>
                  <h1 className="text-2xl ">{forecast?.sunset}</h1>
                  <h4 className="text-gray-400 font-bold text-xl my-5">Sunrise</h4>
                  <h1 className="text-2xl ">{forecast?.sunrise}</h1>
                  <h4 className="text-gray-400 font-bold text-xl">Moonrise</h4>
                  <h1 className="text-2xl ">{forecast?.moonrise}</h1>
                </div>
        
            </div>
      
          </div>
        </div>

        {/* aside */}
        <div>aside</div>
      </section>
    </div>
  );
};

export default HourlyForecast;
