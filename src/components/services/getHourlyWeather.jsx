const api = {
  key: import.meta.env.VITE_API_KEY,
  base: import.meta.env.VITE_API_URL,
};

const GetHourlyWeather = (props) => {
  const data = fetch(
    `${api.base}forecast?q=${props}&units=metric&lang=es&APPID=${api.key}&cnt=5`
  ).then((res) => res.json());

  return data;
};

export default GetHourlyWeather;
