import {
  Avatar,
  Box,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const CurrentWeatherPaper = (props) => {
  const { data } = props;

  console.log("current weather", data);

  return (
    <Box component={Paper} container className="p-4 shadow-xl">
      <Grid item className="cityName">
        <Typography className="font-light text-center tracking-wide text-7xl uppercase antialiased">
          {data.name}, {data.sys.country}
        </Typography>
      </Grid>
      <Divider className="mt-4" />
      <Grid item className="description">
        <Typography className="font-extralight text-left text-4xl ml-4 mt-2 capitalize antialiased">
          {data.weather[0].description}
        </Typography>
      </Grid>
      <Grid item className="mt-2 ml-4">
        <Stack direction="row">
          <Grid item>
            <Avatar
              alt="Remy Sharp"
              src={`${data.weather[0].icon}`}
              sx={{ width: 165, height: 165 }}
            />
          </Grid>
          <Typography className="font-black text-left text-9xl ml-4 mt-4 mr-6 antialiased">
            {Math.round(data.main.temp)}°
          </Typography>
          <Stack>
            <Typography className="font-medium text-left text-2xl ml-6 mt-8 uppercase antialiased">
              sensación térmica
            </Typography>
            <Typography className="font-thin text-left text-6xl ml-6 mt-2 antialiased">
              {Math.round(data.main.feels_like)}°
            </Typography>
          </Stack>
        </Stack>
      </Grid>
      <Stack item direction="row" spacing={8} className="mt-8">
        <Grid item className="tempMax">
          <Stack direction="row">
            <Avatar
              alt="Remy Sharp"
              src="/icons/instruments/thermometer-warmer.svg"
              sx={{ width: 120, height: 120 }}
            />
            <Typography className="font-normal text-center text-7xl ml-4 mt-2 capitalize antialiased">
              {Math.round(data.main.temp_max)}°
            </Typography>
          </Stack>
        </Grid>
        <Grid item className="tempMin">
          <Stack direction="row">
            <Avatar
              alt="Remy Sharp"
              src="/icons/instruments/thermometer-colder.svg"
              sx={{ width: 120, height: 120 }}
            />
            <Typography className="font-normal text-center text-7xl ml-4 mt-2 capitalize antialiased">
              {Math.round(data.main.temp_min)}°
            </Typography>
          </Stack>
        </Grid>
      </Stack>
    </Box>
  );
};

export default CurrentWeatherPaper;
