import React from 'react'

export const TodayStaus = () => {
  return (
    <div> <div className="bg-gradient-to-t  from-[#0E1421] via-[#1d325f4c] to-[#0E1421] p-3  text-white rounded-2xl">
    <h1 className="text-xl ">Today Highlight</h1>
 {/*    {!loading ? ( */}
      <div className="grid grid-cols-2 grid-rows-2 gap-2 mt-3">
        <div className="bg-white/5 p-3 rounded-lg">
          <h1 className="mb-2">UV Index</h1>
          <div className="flex justify-between gap-3 ">
            <div className="h-28">
{/*               <img src={uv} className="h-full" alt="" />
 */}              UV img
            </div>
            <div className="flex justify-end flex-col">
              <h1 className="text-3xl text-center">{/* {current?.uv} */} UV</h1>
            </div>
          </div>
        </div>
        <div className="bg-white/5 p-3 rounded-lg">
          <h1 className="mb-2">pressure (mb)</h1>
          <div className="flex justify-between gap-3">
            <div className="h-28">
{/*               <img src={prasure} className="h-full" alt="" />
    {}
 */}      
 Presure img
 </div>
            <div className="flex justify-end flex-col">
      {/*         <h1 className="text-3xl text-center">{current?.pressure_mb}</h1> */}
      PresureMb
            </div>
          </div>
        </div>
        <div className="bg-white/5 p-3 rounded-lg">
          <h1 className="mb-2">Humidity</h1>
          <div className="flex justify-between gap-3 ">
            <div className="h-28">
           {/*    <img src={Humidity} className="h-full" alt="" /> */}
           Humidityimg
            </div>
            <div className="flex justify-end flex-col">
              <h1 className="text-3xl text-center">{/* {current?.humidity} */}%</h1>
            </div>
          </div>
        </div>
        <div className="bg-white/5 p-3 rounded-lg ">
          <h1 className="mb-2">Wind speed (kmh)</h1>
          <div className="flex justify-between gap-3 ">
            <div className="h-28">
{/*               <img src={wind} className="h-full" alt="" />
 */}      wind img  
 
 </div>
            <div className="flex justify-end flex-col">
              <h1 className="text-3xl text-center">{/* {current?.wind_kph} */} kph</h1>
            </div>
          </div>
        </div>
      </div>
{/*     ) : ( */}
      <div className="flex items-center justify-center h-44  w-full">
        <div className="loader"></div>
      </div>
{/*     )} */}
  </div></div>
  )
}
