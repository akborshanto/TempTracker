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

  const sunSunset = wetherData?.data?.forecast?.forecastday[0]?.hour.slice(
    0,
    5
  );


  const tomorrowData=wetherData?.data?.forecast?.forecastday[0];
console.log(tomorrowData)
  return (
    <div className=" ">
      <section className=" flex justify-between gap-10 p-5 mt-4  selection:text-cyan-500 bg-[rgb(14,20,33)]">
        {/* left side hour forecatr */}
        <div className="flex justify-between items-center w-3/  bg-[#131826] p-6 rounded-lg shadow-sm shadow-cyan-500 hover:shadow-blue-600 hover:shadow-md">
          <div>
            <h1 className="text-xl font-bold">Hourly Forecast</h1>

            {/* mapping the sunSunsetData */}
            <div className=" grid grid-cols-5 gap-4">
              {sunSunset?.map((i) => (
                <div key={Math.random()} className="bg-[#21293d] my-4 w-[100px] h-[200px] text-2xl font-bold  text-center rounded-lg  shadow-sm shadow-cyan-500 hover:shadow-blue-600 hover:shadow-md">
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
            <div>
              <div className="flex gap-4 items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Tommorow</h3>
                  <h2>
                    {
                      wetherData?.data?.forecast?.forecastday[0]?.day?.condition
                        ?.text
                    }
                  </h2>
                </div>
                <h2 className="text-2xl font-bold">
                  Avg:
                  {wetherData?.data?.forecast?.forecastday[0]?.day?.avgtemp_c}°
                  C
                </h2>
                <img
                  src={
                    wetherData?.data?.forecast?.forecastday[0]?.day?.condition
                      ?.icon
                  }
                ></img>
              </div>
            </div>
          </div>
          <div>
            {/* card */}

            <div className=" ">
              <div key={Math.random()}>
                <h4 className="text-gray-400 font-bold text-xl">Sunset</h4>
                <h1 className="text-2xl ">{forecast?.sunset}</h1>
                <h4 className="text-gray-400 font-bold text-xl my-5">
                  Sunrise
                </h4>
                <h1 className="text-2xl ">{forecast?.sunrise}</h1>
                <h4 className="text-gray-400 font-bold text-xl">Moonrise</h4>
                <h1 className="text-2xl ">{forecast?.moonrise}</h1>
              </div>
            </div>
          </div>
        </div>

        {/* aside */}
        <div className= " w-1/2 bg-[#131826] p-6 rounded-lg shadow-sm shadow-cyan-500 hover:shadow-blue-600 hover:shadow-md">
        
    <h1 className="text-2xl font-bold">Days Forecast</h1>
        
<div>

{
sunSunset?.map((item,i)=>{
 
  return(
  
   
  <div key={i} className="flex justify-between mt-4 bg-[#21293d] p-2 rounded-lg items-center shadow-sm shadow-cyan-500 hover:shadow-blue-600 hover:shadow-md">
<h1 className="text-2xl font-bold">{item?.temp_c}° C</h1>
  <img src={item?.condition?.icon}></img>
  </div>
  )
  
  })
}

</div>









        </div>
      </section>
    </div>
  );
};

export default HourlyForecast;
