import { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";

import "./assets/css/App.css";

import { Button, Card, Container, Stack } from "@mui/material";

import CurrentWeatherBar from "./components/CurrentWeather";
import SnackBarAlert from "./components/theme/Snackbar";
import SearchAppBar from "./components/theme/AppBar";
import WeeklyWeather from "./components/WeeklyWeather";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import moment from "moment/moment";
import getCurrentWeather from "./helpers/getCurrentWeather";
import getForecastWeather from "./helpers/getForecastWeather";
import getWeaklyWeather from "./helpers/getWeaklyWeather";
import ForecastWeather from "./components/ForecastWeather";

function App() {
  const [checked, setChecked] = useState(false);

  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: `${mode}`,
    },
  });
  const [open, setOpen] = useState(false);

  const [currentWeather, setCurrentWeather] = useState({
    city: "Ciudad no encontrada",
    country: ":(",
    date: "no date",
    description: "",
    temp: "9",
    temp_max: "n/a",
    temp_min: "n/a",
    humidity: "n/a",
    sunrise: "",
    sunset: "",
    icon: "icons/instruments/barometer.svg",
  });

  const [forecastWeather, setForecastWeather] = useState({
    city: "",
    country: "",
    hourly: [
      {
        date: "no date",
        description: "no description",
        temp_max: "no temp_max",
        temp_min: "no temp_min",
        humidity: "no humidity",
        feels_like: "no feels_like",
        icon: "icons/generals/01d.svg",
        pop: "no pop",
      },
    ],
  });

  const [weaklyWeather, setWeaklyWeather] = useState({});

  const toggleChecked = (data) => {
    setChecked(data);
  };
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      submitSearch();
    }
  };

  async function fetchData(searchValue) {
    // const currentWeatherData = await getCurrentWeather(searchValue);
    // setCurrentWeather((prevState) => ({
    //   ...prevState,
    //   city: currentWeatherData.name,
    //   country: currentWeatherData.sys?.country,
    //   date: moment.unix(currentWeatherData.dt).format("DD/MM/YYYY"),
    //   time: moment.unix(currentWeatherData.dt).format("HH:mm"),
    //   description: "data.weather[0].description.toUpperCase()",
    //   temp: Math.round(currentWeatherData.main.temp),
    //   temp_max: Math.round(currentWeatherData.main.temp_max),
    //   temp_min: Math.round(currentWeatherData.main.temp_min),
    //   feels_like: Math.round(currentWeatherData.main.feels_like),
    //   humidity: currentWeatherData.main.humidity,
    //   sunrise: moment.unix(currentWeatherData.sys.sunrise).format("HH:mm"),
    //   sunset: moment.unix(currentWeatherData.sys.sunset).format("HH:mm"),
    //   icon: `icons/generals/${currentWeatherData.weather[0]?.icon}.svg`,
    // }));
  }

  const submitSearch = () => {
    setSearchValue(searchValue);
    fetchData(searchValue);
  };

  useEffect(() => {
    // const currentWeatherData = getCurrentWeather(searchValue);
    // setCurrentWeather((prevState) => ({
    //   ...prevState,
    //   city: currentWeatherData.name,
    //   country: currentWeatherData.sys?.country,
    //   date: moment.unix(currentWeatherData.dt).format("DD/MM/YYYY"),
    //   time: moment.unix(currentWeatherData.dt).format("HH:mm"),
    //   description: "data.weather[0].description.toUpperCase()",
    //   temp: Math.round(currentWeatherData.main.temp),
    //   temp_max: Math.round(currentWeatherData.main.temp_max),
    //   temp_min: Math.round(currentWeatherData.main.temp_min),
    //   feels_like: Math.round(currentWeatherData.main.feels_like),
    //   humidity: currentWeatherData.main.humidity,
    //   sunrise: moment.unix(currentWeatherData.sys.sunrise).format("HH:mm"),
    //   sunset: moment.unix(currentWeatherData.sys.sunset).format("HH:mm"),
    //   icon: `icons/generals/${currentWeatherData.weather[0]?.icon}.svg`,
    // }));
    // getForecastWeather(searchValue).then((data) => {
    //   setWeaklyWeather((prevState) => ({
    //     ...prevState,
    //     city: data.city.name.toUpperCase(),
    //     country: data.city.country.toUpperCase(),
    //     sunrise: moment.unix(data.city.sunrise).format("HH:mm"),
    //     sunset: moment.unix(data.city.sunset).format("HH:mm"),
    //     hourly: [
    //       data.list.map((item) => {
    //         return {
    //           time: moment.unix(item.dt).format("HH:mm"),
    //           date: moment.unix(item.dt).format("DD/MM/YYYY"),
    //           description: item.weather[0].description.toUpperCase(),
    //           temp_max: Math.round(item.main.temp_max),
    //           temp_min: Math.round(item.main.temp_min),
    //           feels_like: Math.round(item.main.feels_like),
    //           humidity: item.main.humidity,
    //           pop: item.pop,
    //           icon: `icons/generals/${item.weather[0].icon}.svg`,
    //         };
    //       }),
    //     ],
    //   }));
    // });
    // getWeaklyWeather(searchValue).then((data) => {
    //   console.log("weaklyData", data);
    //   setForecastWeather((prevState) => ({
    //     ...prevState,
    //     city: data.city.name,
    //     country: data.city.country,
    //     sunrise: moment.unix(data.city.sunrise).format("HH:mm"),
    //     sunset: moment.unix(data.city.sunset).format("HH:mm"),
    //     hourly: [
    //       data.list.map((item) => {
    //         return {
    //           date: moment.unix(item.dt).format("HH:mm"),
    //           description: item.weather[0].description,
    //           temp_max: Math.round(item.main.temp_max),
    //           temp_min: Math.round(item.main.temp_min),
    //           feels_like: Math.round(item.main.feels_like),
    //           humidity: item.main.humidity,
    //           pop: item.pop,
    //           icon: `icons/generals/${item.weather[0].icon}.svg`,
    //         };
    //       }),
    //     ],
    //   }));
    // });
  }, [submitSearch]);

  console.log("currentWeather", currentWeather);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <SearchAppBar
        onSearchInputChange={handleSearchInputChange}
        onEnterKeyPress={handleEnterKeyPress}
      />
      <Container component={Card} sx={{ margin: 2 }}>
        {/* <SnackBarAlert open={open} /> */}
        <Stack direction="column" spacing={2}>
          <CurrentWeatherBar currentWeather={currentWeather} />
          <ForecastWeather forecast={forecastWeather} />
          <WeeklyWeather search={weaklyWeather} />
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
