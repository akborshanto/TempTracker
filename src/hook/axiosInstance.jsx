import axios from 'axios'
import React from 'react'

export const axiosInstance = () => {
axios.create({
baseURL:'https://api.weatherapi.com/'

})


  return (
    <div>axiosInstance</div>
  )
}
