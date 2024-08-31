import React, { useContext } from 'react'

import uv_img from '/public/img/uv.svg'

import presure_img from '/public/img/prasure.svg'

import humidity_img from '/public/img/Humidity.svg'

import wind_img from '/public/img/wind.svg'
import { WetherContext } from '../hook/WetherContext'

export const TodayStaus = () => {
const {  wetherData }=useContext(WetherContext)
  const { temp_c, temp_f, condition, dewpoint_c, heatindex_c ,feelslike_c,uv,wind_kph,pressure_mb,humidity} =
  wetherData?.data?.current || {};
  return (
   <div className="bg-gradient-to-t  from-[#0E1421] via-[#1d325f4c] to-[#0E1421] p-6  text-white rounded-2xl">
    <h1 className="text-xl ">Today Highlight</h1>
 {/*    {!loading ? ( */}
      <div className="grid grid-cols-2 grid-rows-2 gap-2 mt-3 ">
        <div className="bg-white/5 p-6 rounded-lg  shadow-sm shadow-cyan-500 hover:shadow-blue-600 hover:shadow-m">
          <h1 className="mb-2">UV Index</h1>
          <div className="flex justify-between gap-3 ">
            <div className="h-28">
             <img src={uv_img} className="h-full" alt="" />
      
            </div>
            <div className="flex justify-end flex-col">
              <h1 className="text-3xl text-center">{uv} UV</h1>
            </div>
          </div>
        </div>
        <div className="bg-white/5 p-6 rounded-lg  shadow-sm shadow-cyan-500 hover:shadow-blue-600 hover:shadow-m">
          <h1 className="mb-2">pressure (mb)</h1>
          <div className="flex justify-between gap-3">
            <div className="h-28">
              <img src={presure_img} className="h-full" alt="" />
   

 </div>
            <div className="flex justify-end flex-col">
        <h1 className="text-3xl text-center">{pressure_mb}</h1> 
 
            </div>
          </div>
        </div>
        <div className="bg-white/5 p-6 rounded-lg  shadow-sm shadow-cyan-500 hover:shadow-blue-600 hover:shadow-m">
          <h1 className="mb-2">Humidity</h1>
          <div className="flex justify-between gap-3 ">
            <div className="h-28">
      <img src={humidity_img} className="h-full" alt="" />
 
            </div>
            <div className="flex justify-end flex-col">
              <h1 className="text-3xl text-center">{humidity} %</h1>
            </div>
          </div>
        </div>
        <div className="bg-white/5 p-6 rounded-lg  shadow-sm shadow-cyan-500 hover:shadow-blue-600 hover:shadow-m ">
          <h1 className="mb-2">Wind speed (kmh)</h1>
          <div className="flex justify-between gap-3 ">
            <div className="h-28">
              <img src={wind_img} className="h-full" alt="" />

 
 </div>
            <div className="flex justify-end flex-col">
              <h1 className="text-3xl text-center">{wind_kph} kph</h1>
            </div>
          </div>
        </div>
      </div>


</div>

  )
}
