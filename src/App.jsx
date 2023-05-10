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
  Typography,
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
import moment from "moment";
import "moment/min/locales";

function App() {
  moment.locale("es");
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
  const [isLoading, setIsLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "right",
    severity: "success",
    message: "",
  });

  const translatedDays = [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo",
  ];

  console.log("translatedDays", translatedDays);

  // formatted data
  const [currentWeatherStatus, setCurrentWeatherStatus] = useState({
    id: "",
    cod: "",
    name: "",
    country: "",
    time: "",
    date: "",
    description: "",
    dt: "",
    sunrise: "",
    sunset: "",
    timezone: "",
    temp: "",
    feels_like: "",
    temp_min: "",
    temp_max: "",
    icon: "",
    humidity: "",
  });

  const [currentHourlyWeatherStatus, setcurrentHourlyWeatherStatus] = useState({
    forecasts: [
      {
        dt: "",
        temp_min: "",
        temp_max: "",
        icon: "",
        pop: "",
      },
    ],
  });

  const [weaklyWeatherStatus, setWeaklyWeatherStatus] = useState({
    forecasts: [
      {
        day: "",
        description: "",
        temp_min: "",
        temp_max: "",
        pop: "",
        icon: "",
      },
    ],
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
    setOpenAlert({ ...openAlert, open: false });
  };

  useEffect(() => {
    if (search) {
      try {
        setIsLoading(true);
        setOpen(true);
        // currentWeather
        GetCurrentWeather(search).then((data) => {
          setCurrentWeatherStatus((prevState) => ({
            ...prevState,
            id: data.id,
            cod: data.cod,
            name: data.name,
            country: data.sys.country,
            time: moment()
              .utcOffset(data.timezone / 60)
              .format("HH:mm"),
            date: moment()
              .utcOffset(data.timezone / 60)
              .format("ddd, DD MMMM"),
            description: data.weather[0].description,
            dt: data.dt,
            sunrise: moment.unix(data.sys.sunrise).format("HH:mm"),
            sunset: moment.unix(data.sys.sunset).format("HH:mm"),
            timezone: data.timezone,
            temp: Math.round(data.main.temp),
            feels_like: Math.round(data.main.feels_like),
            temp_min: Math.round(data.main.temp_min),
            temp_max: Math.round(data.main.temp_max),
            icon: `icons/openweathermap/${data.weather[0].icon}.svg`,
            humidity: data.main.humidity,
          }));
        });
        // hourlyWeather
        GetHourlyWeather(search).then((data) => {
          setcurrentHourlyWeatherStatus((prevState) => ({
            ...prevState,
            forecasts: data.list?.map((row) => ({
              dt: moment.unix(row.dt).format("HH:mm"),
              temp_min: Math.round(row.main.temp_min),
              temp_max: Math.round(row.main.temp_max),
              icon: `icons/openweathermap/${row.weather[0].icon}.svg`,
              pop: Math.round(row.pop * 100),
            })),
          }));
        });
        // ForecastWeather
        GetForecastWeather(search).then((data) => {
          const groupedData = data.list.reduce((acc, curr) => {
            const dayOfWeek = moment(curr.dt_txt).format("dddd");
            if (!acc[dayOfWeek]) {
              acc[dayOfWeek] = {
                temp: 0,
                feels_like: 0,
                temp_min: 0,
                temp_max: 0,
                humidity: 0,
                prop: 0,
                description: "",
                count: 0,
                icon: "",
              };
            }
            acc[dayOfWeek].temp += curr.main.temp;
            acc[dayOfWeek].feels_like += curr.main.feels_like;
            acc[dayOfWeek].temp_min += Math.floor(curr.main.temp_min);
            acc[dayOfWeek].temp_max += curr.main.temp_max;
            acc[dayOfWeek].humidity += curr.main.humidity;
            acc[dayOfWeek].prop += curr.pop;
            acc[dayOfWeek].description = curr.weather[0].description;
            acc[dayOfWeek].icon = curr.weather[0].icon;
            acc[dayOfWeek].count++;
            return acc;
          }, {});

          const result = Object.keys(groupedData).map((day) => {
            const avg = {
              temp: groupedData[day].temp / groupedData[day].count,
              feels_like: groupedData[day].feels_like / groupedData[day].count,
              temp_min: groupedData[day].temp_min / groupedData[day].count,
              temp_max: groupedData[day].temp_max / groupedData[day].count,
              humidity: groupedData[day].humidity / groupedData[day].count,
              prop: groupedData[day].prop / groupedData[day].count,
              description: groupedData[day].description,
              icon: groupedData[day].icon,
            };
            return {
              day,
              ...avg,
            };
          });

          setWeaklyWeatherStatus((prevState) => ({
            ...prevState,
            forecasts: result?.map((row) => ({
              day: row.day,
              description: row.description,
              temp_min: Math.round(row.temp_min),
              temp_max: Math.round(row.temp_max),
              pop: Math.round(row.prop * 100),
              icon: `icons/openweathermap/${row.icon}.svg`,
            })),
          }));
        });

        setOpenAlert({
          ...openAlert,
          open: true,
          severity: "success",
          message: "Datos cargados correctamente",
        });
      } catch (error) {
        setOpenAlert({
          ...openAlert,
          open: true,
          severity: "error",
          message: "error :(",
        });
      } finally {
        setOpen(false);
        setIsLoading(true);
      }
    }
  }, [search]);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <SearchAppBar search={handleSearch} mode={handleMode} />
        <Snackbar
          open={openAlert.open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{
            vertical: openAlert.vertical,
            horizontal: openAlert.horizontal,
          }}
        >
          <Alert
            onClose={handleClose}
            severity={openAlert.severity}
            sx={{ width: "100%" }}
          >
            {openAlert.message}
          </Alert>
        </Snackbar>
        <Box component={Card}>
          <Backdrop open={open} className="w-full">
            <CircularProgress color="inherit" />
          </Backdrop>
          <Grid
            container
            className="mt-4 mb-4 p-4"
            justifyContent="center"
            alignItems="stretch"
          >
            <Stack direction="row" spacing={2}>
              <Grid item md={2} sm={12}>
                <WeaklyWeatherPaper data={weaklyWeatherStatus} />
              </Grid>
              <Grid item md={7} sm={12}>
                <CurrentWeatherPaper data={currentWeatherStatus} />
              </Grid>
              <Grid item md={3} sm={12}>
                <HourlyWeatherPaper data={currentHourlyWeatherStatus} />
              </Grid>
            </Stack>
          </Grid>
          {/* <Grid container>
            <Typography className="text-center font-light text-2xl antialiased">
              Ingrese nombre de una ciudad
            </Typography>
          </Grid> */}
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
