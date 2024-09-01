import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const WetherContext = createContext(null);
const WetherProvider = ({ children }) => {
  const [wetherData, setWetherData] = useState(null);
  const [loading, setLoading] = useState(false);
  //latitude = Region/place
  const [latitude, setLatitude] = useState(null);
  const [logitude, setLogitude] = useState(null);
  const [location, setLocation] = useState("");
  /* get the current location */
  useEffect(() => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
      
          setLatitude(position.coords.latitude.toFixed(2));
          setLogitude(position.coords.longitude.toFixed(2));
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          toast.error(error.message);
        }
      );
    }
  }, []);

  /* feth wether data */
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.weatherapi.com/v1/forecast.json?key=62c4b43ad8b741c18e432712243008&q=chittagong"
    )
      .then((res) => res.json())
      .then((data) => {
        // if (data.error) {
        //   toast.error(data.error.message);
        // } else {
        //   setWetherData(data);
        //   setLoading(false);
        // }

        if (data.location) {
          setLocation(data.location.name);
          setWetherData({data})
        }
      });
  }, []);

const valuesOfWether={location,latitude,logitude}
  const wetherValue = {
    loading,
    setLoading,
    wetherData,
    valuesOfWether
  };

  return (
    <div>
      <WetherContext.Provider value={wetherValue}>
        {children}
      </WetherContext.Provider>
    </div>
  );
};

export default WetherProvider;
