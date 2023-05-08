// react imports
import { useEffect, useState } from "react";

// css & theme imports
import "./assets/css/App.css";
import { ThemeProvider } from "@emotion/react";

// material ui imports
import {
  Alert,
  Backdrop,
  Box,
  Card,
  CircularProgress,
  Grid,
  Snackbar,
  Stack,
  createTheme,
} from "@mui/material";

// components imports
import SearchAppBar from "./components/layout/SearchAppBar";
import CurrentWeatherPaper from "./components/data-display/currentWeather";
import HourlyWeatherPaper from "./components/data-display/hourlyWeather";
import WeaklyWeatherPaper from "./components/data-display/weaklyWeather";

// services imports
import GetCurrentWeather from "./services/getCurrentWeather";
import GetForecastWeather from "./services/GetForecastWeather";
import GetHourlyWeather from "./services/GetHourlyWeather";

function App() {
  // theme
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode === "dark" ? "dark" : "light",
    },
  });

  // globals
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState({
    cod: 200,
  });

  // apiData
  const [currentWeather, setCurrentWeather] = useState({
    coord: {
      lon: "n/a",
      lat: "n/a",
    },
    weather: [
      {
        id: "n/a",
        main: "n/a",
        description: "n/a",
        icon: "icons/instruments/not-available.svg",
      },
    ],
    base: "stations",
    main: {
      temp: "n/a",
      feels_like: "n/a",
      temp_min: "n/a",
      temp_max: "n/a",
      pressure: "n/a",
      humidity: "n/a",
      sea_level: "n/a",
      grnd_level: "n/a",
    },
    visibility: "n/a",
    wind: {
      speed: "n/a",
      deg: "n/a",
      gust: "n/a",
    },
    rain: {
      "1h": "n/a",
    },
    clouds: {
      all: "n/a",
    },
    dt: "n/a",
    sys: {
      type: "n/a",
      id: "n/a",
      country: "n/a",
      sunrise: "n/a",
      sunset: "n/a",
    },
    timezone: 7200,
    id: 3163858,
    name: "n/a",
    cod: "",
  });
  const [hourlyWeather, setHourlyWeather] = useState({
    cod: "",
    message: 0,
    cnt: 5,
    list: [],
    city: {
      id: 0,
      name: "not found",
      coord: { lat: 48.8534, lon: 2.3488 },
      country: "nf",
      population: 1000000,
      timezone: 7200,
      sunrise: 1634129316,
      sunset: 1634170009,
    },
  });
  const [forecastWeather, setForecastWeather] = useState({
    cod: "",
    message: 0,
    cnt: 5,
    list: [],
    city: {},
  });

  // functions
  function handleSearch(city) {
    setSearch(city);
  }

  function handleMode(e) {
    setMode(e);
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (search !== "") {
      // currentWeather
      GetCurrentWeather(search).then((data) => {
        setCurrentWeather((prevState) => ({
          ...prevState,
          coord: {
            lon: data.coord.lon,
            lat: data.coord.lat,
          },
          weather: [
            {
              id: data.weather[0].id,
              main: data.weather[0].main,
              description: data.weather[0].description,
              icon: `icons/openweathermap/${data.weather[0].icon}.svg`,
            },
          ],
          base: data.base,
          main: {
            temp: data.main.temp,
            feels_like: data.main.feels_like,
            temp_min: data.main.temp_min,
            temp_max: data.main.temp_max,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            sea_level: data.main.sea_level,
            grnd_level: data.main.grnd_level,
          },
          visibility: data.visibility,
          wind: {
            speed: data.wind.speed,
            deg: data.wind.deg,
            gust: data.wind.gust,
          },

          clouds: {
            all: data.clouds.all,
          },
          dt: data.dt,
          sys: {
            type: data.sys.type,
            id: data.sys.id,
            country: data.sys.country,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
          },
          timezone: data.timezone,
          id: data.id,
          name: data.name,
          cod: data.cod,
        }));
        if (data.cod === 200) {
          setStatus((prevState) => ({
            ...prevState,
            cod: currentWeather.cod,
          }));
        } else {
          // setData((currentWeather.cod = 404));
        }
      });
      // hourlyWeather
      GetHourlyWeather(search).then((data) => {
        setHourlyWeather((prevState) => ({
          ...prevState,
          cod: data.cod,
          message: data.message,
          cnt: data.cnt,
          list: data.list.map((row) => ({
            dt: row.dt,
            main: {
              temp: row.main.temp,
              feels_like: row.main.feels_like,
              temp_min: row.main.temp_min,
              temp_max: row.main.temp_max,
              pressure: row.main.pressure,
              sea_level: row.main.sea_level,
              grnd_level: row.main.grnd_level,
              humidity: row.main.humidity,
              temp_kf: row.main.temp_kf,
            },
            weather: [
              {
                id: row.weather[0].id,
                main: row.weather[0].main,
                description: row.weather[0].description,
                icon: `icons/openweathermap/${row.weather[0].icon}.svg`,
              },
            ],
            clouds: {
              all: row.clouds.all,
            },
            wind: {
              speed: row.wind.speed,
              deg: row.wind.deg,
              gust: row.wind.gust,
            },
            visibility: row.visibility,
            pop: row.pop,
            sys: {
              pod: row.sys.pod,
            },
            dt_txt: row.dt_txt,
          })),
          city: {
            id: data.city.id,
            name: data.city.name,
            coord: {
              lat: data.city.coord.lat,
              lon: data.city.coord.lon,
            },
            country: data.city.country,
            population: data.city.population,
            timezone: data.city.timezone,
            sunrise: data.city.sunrise,
            sunset: data.city.sunset,
          },
        }));
        if (data.cod === 200) {
          setStatus((prevState) => ({
            ...prevState,
            cod: data.cod,
          }));
        } else {
          // setData((status.cod = 404));
        }
      });
      // ForecastWeather
      GetForecastWeather(search).then((data) => {
        setForecastWeather((prevState) => ({
          ...prevState,
          cod: data.cod,
          message: data.message,
          cnt: data.cnt,
          list: data.list.map((row) => ({
            dt: row.dt,
            dt_txt: row.dt_txt,
            main: {
              temp: row.main.temp,
              feels_like: row.main.feels_like,
              temp_min: row.main.temp_min,
              temp_max: row.main.temp_max,
              pressure: row.main.pressure,
              sea_level: row.main.sea_level,
              grnd_level: row.main.grnd_level,
              humidity: row.main.humidity,
              temp_kf: row.main.temp_kf,
            },
            pop: row.pop,
            visibility: row.visibility,
            wind: {
              speed: row.wind.speed,
              deg: row.wind.deg,
              gust: row.wind.gust,
            },
            clouds: {
              all: row.clouds.all,
            },

            sys: {
              pod: row.sys.pod,
            },
            weather: [
              {
                id: row.weather[0].id,
                main: row.weather[0].main,
                description: row.weather[0].description,
                icon: `icons/openweathermap/${row.weather[0].icon}.svg`,
              },
            ],
          })),
          city: {
            id: data.city.id,
            name: data.city.name,
            coord: {
              lat: data.city.coord.lat,
              lon: data.city.coord.lon,
            },
          },
        }));
      });
    }
    setOpen(true);
  }, [search, mode]);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <SearchAppBar search={handleSearch} mode={handleMode} />
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            {...(currentWeather.cod !== 200
              ? { severity: "error" }
              : { severity: "success" })}
            sx={{ width: "100%" }}
          >
            {...currentWeather.cod !== 200
              ? "Ciudad no encontrada 😔"
              : "Ciudad encontrada 😀"}
          </Alert>
        </Snackbar>
        <Box component={Card} className="w-full">
          <Backdrop open={currentWeather.cod !== 200} className="w-full">
            <CircularProgress color="inherit" />
          </Backdrop>
          <Grid container className="mt-6 mb-12 mr-6 ml-6" xs={12}>
            <Stack direction="row" spacing={3}>
              <Grid item sx={4}>
                <WeaklyWeatherPaper data={forecastWeather} />
              </Grid>
              <Grid item sx={4}>
                <CurrentWeatherPaper data={currentWeather} />
              </Grid>
              <Grid item sx={4}>
                <HourlyWeatherPaper data={hourlyWeather} />
              </Grid>
            </Stack>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
