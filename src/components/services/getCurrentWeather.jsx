import { useEffect, useState } from "react";

const api = {
  key: import.meta.env.VITE_API_KEY,
  base: import.meta.env.VITE_API_URL,
};

const GetCurrentWeather = (props) => {
  const data = fetch(
    `${api.base}weather?q=${props}&units=metric&lang=es&APPID=${api.key}`
  ).then((res) => res.json());
  return data;
};

export default GetCurrentWeather;
