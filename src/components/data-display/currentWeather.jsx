import {
  Avatar,
  Box,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import moment from "moment";
import "moment/locale/es";

import React from "react";

moment.locale("es");

const CurrentWeatherPaper = (props) => {
  const { data } = props;

  const timezone = data.timezone;

  return (
    <Box component={Paper} container className="p-2 shadow-xl">
      <Grid item className="cityName">
        <Typography className="font-light text-left tracking-wide text-6xl uppercase antialiased">
          {data.name}, {data.sys.country}
        </Typography>
        <Typography className="font-light text-left uppercase antialiased">
          {moment()
            .utcOffset(timezone / 60)
            .format("ddd, DD MMMM")}
        </Typography>
        <Typography className="font-light text-left uppercase antialiased">
          {moment()
            .utcOffset(timezone / 60)
            .format("HH:mm")}
        </Typography>
      </Grid>
      <Divider className="mt-4" />
      <Grid item className="description">
        <Typography className="font-extralight text-left text-4xl ml-4 mt-2 capitalize antialiased">
          {data.weather[0].description}
        </Typography>
      </Grid>
      {/* temp actual */}
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
            <Typography className="font-thin text-left text-4xl ml-6 mt-2 antialiased">
              {Math.round(data.main.feels_like)}°
            </Typography>
          </Stack>
        </Stack>
      </Grid>
      {/* tempMax tempMin */}
      <Stack item direction="row" spacing={8} className="mt-8">
        <Grid item className="tempMax">
          <Stack direction="row">
            <Avatar
              alt="Remy Sharp"
              src="/icons/instruments/thermometer-warmer.svg"
              sx={{ width: 120, height: 120 }}
            />
            <Stack direction="column">
              <Typography className="font-thin text-left text-base mt-2 capitalize antialiased">
                temperatura máxima
              </Typography>
              <Typography className="font-medium text-center text-7xl ml-2 mt-1 capitalize antialiased">
                {Math.round(data.main.temp_max)}°
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item className="tempMin">
          <Stack direction="row">
            <Avatar
              alt="Remy Sharp"
              src="/icons/instruments/thermometer-colder.svg"
              sx={{ width: 120, height: 120 }}
            />
            <Stack direction="column">
              <Typography className="font-thin text-left text-base mt-2 capitalize antialiased">
                temperatura mínima
              </Typography>
              <Typography className="font-medium text-center text-7xl ml-2 mt-1 capitalize antialiased">
                {Math.round(data.main.temp_min)}°
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Stack>
      <Divider className="mt-4" />
      <Stack direction="row" className="justify-center" spacing={8}>
        {/* sunrise sunset */}
        <Grid item>
          <Stack direction="row" spacing={4} className="justify-left mt-2">
            {/* sunrise */}
            <Grid item>
              <Stack direction="column">
                <Avatar
                  alt="Remy Sharp"
                  src="/icons/instruments/sunrise.svg"
                  sx={{ width: 70, height: 70 }}
                />
                <Stack direction="column">
                  <Typography className="capitalize font-thin text-lg">
                    Amanecer
                  </Typography>
                  <Typography className="uppercase font-normal text-lg mr-2 mt-2">
                    {moment.unix(data.sys.sunrise).format("HH:mm")}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            {/* sunset */}
            <Grid item>
              <Stack direction="column">
                <Avatar
                  alt="Remy Sharp"
                  src="/icons/instruments/sunset.svg"
                  sx={{ width: 70, height: 70 }}
                />
                <Stack direction="column">
                  <Typography className="capitalize font-thin text-lg">
                    atardecer
                  </Typography>
                  <Typography className="uppercase font-normal text-lg mr-2 mt-2">
                    {moment.unix(data.sys.sunset).format("HH:mm")}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Stack>
        </Grid>
        {/* humidity */}
        <Grid item>
          <Stack direction="column" spacing={2}>
            <Typography className="mt-4 font-light text-left text-2xl antialiased uppercase">
              porcentaje de humedad
            </Typography>
            <Stack direction="row" className="ml-9">
              <Typography className="font-medium text-left text-6xl mt-2 ml-6 capitalize antialiased">
                {data.main.humidity}
              </Typography>
              <Avatar
                alt="Remy Sharp"
                src="/icons/instruments/humidity.svg"
                sx={{ width: 130, height: 90 }}
              />
            </Stack>
          </Stack>
        </Grid>
      </Stack>
    </Box>
  );
};

export default CurrentWeatherPaper;
