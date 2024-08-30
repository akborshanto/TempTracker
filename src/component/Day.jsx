import React, { useContext, useEffect } from "react";
import weather from "../../public/img/cloudy-Jo5tpqoZLi.png";
import { IoLocationSharp } from "react-icons/io5";
import { TodayStaus } from "./TodayStaus";
import { WetherContext } from "../hook/WetherContext";
const Day = () => {



  return (
    <section className="bg-gradient-to-t  from-[#0E1421] via-[#1d325f4c] to-[#0E1421] p-3 text-white rounded-2xl flex justify-around ">
<div>


<img src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="" />


<div className="bg-purple-400 w-16 p-2 rounded-badge flex justify-between items-center ">




<IoLocationSharp></IoLocationSharp>
<h3>India</h3>


</div>

</div>
{/* TODAY HIGHLIGH */}
<div>
<TodayStaus></TodayStaus>

</div>




    </section>
  );
};

export default Day;
