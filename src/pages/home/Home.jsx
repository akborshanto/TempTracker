import React from 'react'
import Navbar from '../../shared/Navbar'
import Day from '../../component/Day'
import { TodayStaus } from '../../component/TodayStaus'

const Home = () => {
  return (
    <div>
  <Day></Day>
    <TodayStaus></TodayStaus>
    </div>
  )
}

export default Home