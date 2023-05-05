const api = {
  key: import.meta.env.VITE_API_KEY,
  base: import.meta.env.VITE_API_URL,
};

const getForecastWeather = async (props) => {
  const data = await (
    await fetch(
      `${api.base}forecast?q="${props.search}"&units=metric&lang=es&APPID=${api.key}`
    )
  ).json();

  return data;
};

export default getForecastWeather;
