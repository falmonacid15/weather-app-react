import { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";

import "./assets/css/App.css";

import { Button, Card, Container, Stack } from "@mui/material";

import CurrentWeatherBar from "./components/CurrentWeather";
import SnackBarAlert from "./components/Snackbar";
import SearchAppBar from "./components/AppBar";
import WeeklyWeather from "./components/WeeklyWeather";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import moment from "moment/moment";
import getCurrentWeather from "./helpers/getCurrentWeather";
import getForecastWeather from "./helpers/getForecastWeather";

// debugger;

function App() {
  const [checked, setChecked] = useState(false);
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: `${mode}`,
    },
  });
  const [open, setOpen] = useState(false);

  const [search, setSearch] = useState("puerto varas");

  const [data, setData] = useState({
    city: "no city",
    country: "no country",
    date: "no date",
    description: "no description",
    temp: "no temp",
    temp_max: "no temp_max",
    temp_min: "no temp_min",
    humidity: "no humidity",
    sunrise: "no sunrise",
    sunset: "no sunset",
    icon: "icons/generals/01d.svg",
  });

  const [forecast, setForecast] = useState({
    city: "",
    country: "",
    forecats: [],
  });

  const toggleChecked = (data) => {
    setChecked(data);
  };

  useEffect(() => {
    getCurrentWeather().then((data) => {
      setData((prevState) => ({
        ...prevState,
        city: data.name,
        country: data.sys.country,
        date: moment.unix(data.dt).format("DD/MM/YYYY"),
        time: moment.unix(data.dt).format("HH:mm"),
        description: data.weather[0].description,
        temp: Math.round(data.main.temp),
        temp_max: Math.round(data.main.temp_max),
        temp_min: Math.round(data.main.temp_min),
        feels_like: Math.round(data.main.feels_like),
        humidity: data.main.humidity,
        sunrise: moment.unix(data.sys.sunrise).format("HH:mm"),
        sunset: moment.unix(data.sys.sunset).format("HH:mm"),
        icon: `icons/generals/${data.weather[0].icon}.svg`,
      }));
    });

    getForecastWeather().then((data) => {
      setForecast((prevState) => ({
        ...prevState,
        city: data.city.name,
        country: data.city.country,
        sunrise: moment.unix(data.city.sunrise).format("HH:mm"),
        sunset: moment.unix(data.city.sunset).format("HH:mm"),
        forecats: [
          data.list.map((item) => {
            return {
              date: moment.unix(item.dt).format("HH:mm"),
              description: item.weather[0].description,
              temp_max: Math.round(item.main.temp_max),
              temp_min: Math.round(item.main.temp_min),
              feels_like: Math.round(item.main.feels_like),
              humidity: item.main.humidity,
              pop: item.pop,
              icon: `icons/generals/${item.weather[0].icon}.svg`,
            };
          }),
        ],
      }));
    });
  }, [search]);

  console.log("current", data);
  console.log("forecast", forecast);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <SearchAppBar pallete={toggleChecked} />
      <Container component={Card} sx={{ margin: 2 }}>
        {/* <SnackBarAlert open={open} /> */}
        <Stack direction="column" spacing={2}>
          <CurrentWeatherBar currentWeather={data} forecast={forecast} />
          <WeeklyWeather />
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
