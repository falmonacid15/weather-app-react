const api = {
  key: import.meta.env.VITE_API_KEY,
  base: import.meta.env.VITE_API_URL,
};

const getCurrentWeather = async (props) => {
  const data = await (
    await fetch(
      `${api.base}weather?q=${"barcelona"}&units=metric&lang=es&APPID=${
        api.key
      }`
    )
  ).json();

  return data;
};

export default getCurrentWeather;
