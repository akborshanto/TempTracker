import React from "react";
import Navbar from "../../shared/Navbar";
import Day from "../../component/Day";
import { TodayStaus } from "../../component/TodayStaus";
import HourlyForecast from "../../component/HourlyForecast";

const Home = () => {
  return (
    <div className="">
      <Day></Day>
      <HourlyForecast></HourlyForecast>
    </div>
  );
};

export default Home;
