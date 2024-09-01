import React, { useContext, useEffect, useState } from "react";
import weather from "../../public/img/cloudy-Jo5tpqoZLi.png";
import { IoLocationSharp } from "react-icons/io5";
import { TodayStaus } from "./TodayStaus";
import { WetherContext } from "../hook/WetherContext";
const Day = () => {
  const { wetherData, valuesOfWether } = useContext(WetherContext);
  const { country, localtime, name, tz_id } = wetherData?.data?.location || {};
  const { temp_c, temp_f, condition, dewpoint_c, heatindex_c ,feelslike_c,uv,wind_kph,pressure_in,humidity} =
    wetherData?.data?.current || {};

  const [temercature, setTemperature] = useState({ cel: temp_c, fer: temp_f });

  const [isCelsius, setIsCelsius] = useState(true);
  const handleTemp = () => {
    setIsCelsius(!isCelsius);
  };
  return (
    <section className=" flex justify-between  p-5 mt-4  selection:text-cyan-500 ">
      <div className="bg-[rgb(19,24,38)] w-1/2 h-1/2 p-4 rounded-lg  shadow-sm shadow-cyan-500 hover:shadow-blue-600 hover:shadow-md">
        {/* upper div */}
        <div className="flex justify-between items-cente my-6 ">
          {/* upper card */}
          <div className="bg-purple-800  p-2 rounded-badge flex justify-between items-center ">
            <IoLocationSharp></IoLocationSharp>
            <h3>{name}</h3>
          </div>

          <div>
            <input
              type="checkbox"
              className="toggle bg-cyan-500"
            
              onClick={handleTemp}
            />
          </div>
        </div>

        {/* middle div */}

        <div>
          <h1 className="text-2xl">{localtime}</h1>

          <div className="flex justify-between  items-center">
            {/* celcius to fR */}
            <div className="">
              {/*      <h1> {isCelsius ? `${temercature?.cel}°C` : `${temercature?.fer}°F`}</h1>
               */}
              <h1 className="text-4xl font-bold my-6">{temp_c}°C</h1>
              <div className="flex gap-4 text-xl font-bold">
              <p className="">High: {heatindex_c}</p>
              <p>Low: {dewpoint_c}</p>
              </div>
          
            </div>
            {/* text clouddy */}
            <div className="font-bold">
              <img className="w-[150px]" src={condition?.icon} alt="" />
              <h1 className="text-4xl mb-4">{condition?.text}</h1>
              <h3>feelslike: {feelslike_c}</h3>
            </div>
          </div>
        </div>
      </div>
      {/* aside */}
      <div className="">
    <TodayStaus></TodayStaus>
      </div>
    </section>
  );
};

export default Day;
