import { useEffect, useState } from "react";

const api = {
  key: import.meta.env.VITE_API_KEY,
  base: import.meta.env.VITE_API_URL,
};

const getForecastWeather = async (props) => {
  const [city, setCity] = useState("puerto varas");
  console.log("city", city);

  useEffect(() => {
    setCity(props.search);
  }, [props]);

  const data = await (
    await fetch(
      `${api.base}forecast?q="${city}"&units=metric&lang=es&cnt=5&APPID=${api.key}`
    )
  ).json();

  return data;
};

export default getForecastWeather;
