import {
  Avatar,
  Button,
  ButtonBase,
  Card,
  Container,
  Grid,
  Icon,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import ForecastWeather from "./ForecastWeather";

export default function CurrentWeatherBar(props) {
  const currentWeatherObject = {
    city: props.currentWeather.city,
    country: props.currentWeather.country,
    description: props.currentWeather.description,
    temp: props.currentWeather.temp,
    temp_max: props.currentWeather.temp_max,
    temp_min: props.currentWeather.temp_min,
    feels_like: props.currentWeather.feels_like,
    humidity: props.currentWeather.humidity,
    sunrise: props.currentWeather.sunrise,
    sunset: props.currentWeather.sunset,
    icon: props.currentWeather.icon,
  };

  console.log();

  const forecastWeatherObject = props.forecast;

  const [forecastObject, setForecastObject] = useState({
    city: "not found",
    country: "not found",
    sunrise: "not found",
    sunset: "not found",
    forecast: [],
  });
  useEffect(() => {
    setForecastObject((prevState) => ({
      ...prevState,
      city: forecastWeatherObject.city,
      country: forecastWeatherObject.country,
      sunrise: forecastWeatherObject.sunrise,
      sunset: forecastWeatherObject.sunset,
      forecast: forecastWeatherObject.forecats,
    }));
  }, []);

  let arrayForecast = forecastObject.forecast;

  return (
    <>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 1000,
          flexGrow: 1,
          mt: 2,
          mb: 2,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Stack direction="row" sx={{ width: "100%" }}>
            {/* icon */}
            <Grid item>
              <ButtonBase sx={{ width: 256, height: 256 }} disabled={true}>
                <img alt="complex" src={currentWeatherObject.icon} />
              </ButtonBase>
            </Grid>
            {/* current weather */}
            <Grid item xs={6} component={Paper}>
              <Grid item xs={8} container direction="column" spacing={2}>
                <Grid item xs sx={{ textAlign: "left", mb: 4, mr: 2, mt: 2 }}>
                  <Stack direction="column">
                    {/* city */}
                    <Typography
                      gutterBottom
                      variant="h3"
                      component="div"
                      sx={{ ml: 2 }}
                    >
                      {currentWeatherObject.city}
                    </Typography>
                    {/* description */}
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                      sx={{ ml: 4, mb: 4 }}
                    >
                      {currentWeatherObject.description}
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={3} sx={{ mb: 2 }}>
                    <Stack direction="row" spacing={2}>
                      <ButtonBase
                        sx={{ width: 80, height: 80 }}
                        disabled={true}
                      >
                        <img
                          alt="complex"
                          src="icons/instruments/thermometer-colder.svg"
                        />
                      </ButtonBase>
                      <Stack direction="row">
                        {/* temp_min */}
                        <Typography variant="h3" sx={{ mt: 1 }}>
                          {currentWeatherObject.temp_min}
                        </Typography>
                        <ButtonBase
                          sx={{ width: 50, height: 50 }}
                          disabled={true}
                        >
                          <img
                            alt="complex"
                            src="icons/instruments/celsius.svg"
                          />
                        </ButtonBase>
                      </Stack>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                      <ButtonBase
                        sx={{ width: 80, height: 80 }}
                        disabled={true}
                      >
                        <img
                          alt="complex"
                          src="icons/instruments/thermometer-warmer.svg"
                        />
                      </ButtonBase>
                      <Stack direction="row">
                        {/* temp_max */}
                        <Typography variant="h3" sx={{ mt: 1 }}>
                          {currentWeatherObject.temp_max}
                        </Typography>
                        <ButtonBase
                          sx={{ width: 50, height: 50 }}
                          disabled={true}
                        >
                          <img
                            alt="complex"
                            src="icons/instruments/celsius.svg"
                          />
                        </ButtonBase>
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
            {/* forecast */}
            <ForecastWeather />
          </Stack>
        </Grid>
      </Paper>
    </>
  );
}
