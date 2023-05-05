import {
  Avatar,
  ButtonBase,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

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
  return (
    <>
      <Paper
        sx={{
          margin: 1,
          maxWidth: 1920,
          flexGrow: 0,
          mt: 1,
          mb: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
        container
      >
        <Grid
          item
          xs={12}
          sx={{ mt: 3, mb: 1, ml: 1, mr: 1 }}
          component={Paper}
        >
          <Stack direction="row">
            {/* icon */}
            <Grid>
              <ButtonBase
                sx={{ width: 256, height: 256, mt: 9 }}
                disabled={true}
              >
                <img alt="complex" src={currentWeatherObject.icon} />
              </ButtonBase>
            </Grid>
            <Stack direction="column" xs={12} md={12}>
              <Stack direction="row">
                {/* city */}
                <Typography
                  gutterBottom
                  variant="h3"
                  textAlign="left"
                  sx={{ ml: 2, mt: 9 }}
                >
                  {/* {currentWeatherObject.city} */}
                  Puerto Montt, Chile
                </Typography>
              </Stack>
              {/* description */}
              <Typography
                textAlign="left"
                gutterBottom
                variant="subtitle1"
                sx={{ ml: 3, mb: 4 }}
              >
                {/* {currentWeatherObject.description} */}
                Parcialmente nublado
              </Typography>
              <Stack direction="row" sx={{ mb: 2, mr: 3 }}>
                <ButtonBase sx={{ width: 128, height: 128 }} disabled={true}>
                  <img alt="complex" src="icons/instruments/thermometer.svg" />
                </ButtonBase>
                <Typography variant="h1">18</Typography>
              </Stack>
              <Stack direction="row" spacing={3} sx={{ mb: 2 }}>
                <Stack direction="row" spacing={2}>
                  <ButtonBase sx={{ width: 80, height: 80 }} disabled={true}>
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
                    <ButtonBase sx={{ width: 50, height: 50 }} disabled={true}>
                      <img alt="complex" src="icons/instruments/celsius.svg" />
                    </ButtonBase>
                  </Stack>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <ButtonBase sx={{ width: 80, height: 80 }} disabled={true}>
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
                    <ButtonBase sx={{ width: 50, height: 50 }} disabled={true}>
                      <img alt="complex" src="icons/instruments/celsius.svg" />
                    </ButtonBase>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Paper>
    </>
  );
}
