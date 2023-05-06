const api = {
  key: import.meta.env.VITE_API_KEY,
  base: import.meta.env.VITE_API_URL,
};

const GetHourlyWeather = (props) => {
  const data = fetch(
    `${api.base}forecast?q=${props}&units=metric&lang=es&cnt=5&APPID=${api.key}`
  ).then((res) => res.json());
  console.log("response", data);
  return data;
};

export default GetHourlyWeather;
