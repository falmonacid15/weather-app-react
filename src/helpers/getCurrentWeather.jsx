import { useEffect, useState } from "react";

const api = {
  key: import.meta.env.VITE_API_KEY,
  base: import.meta.env.VITE_API_URL,
};
console.log(api);

const getCurrentWeather = async (props) => {
  if (props) {
    const data = fetch(
      `${api.base}weather?q="${props.searchValue}"&units=metric&lang=es&APPID=${api.key}`
    ).json();
    console.log("data", data);
    return data;
  }
};

export default getCurrentWeather;
