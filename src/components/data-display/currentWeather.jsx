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
import CurrentSkeleton from "../layout/skeletons/currentSkeleton";

moment.locale("es");

const CurrentWeatherPaper = (props) => {
  const { data } = props;
  return (
    <Box component={Paper} className="shadow-xl">
      <Grid container justifyContent="center" className="p-4">
        <Grid item md={12}>
          <Typography className="font-light text-left tracking-wide text-8xl mb-4 uppercase antialiased">
            {data.name}, {data.country}
          </Typography>
          <Typography className="font-light text-left uppercase antialiased">
            {data.date}
          </Typography>
          <Typography className="font-light text-left uppercase antialiased">
            {data.time}
          </Typography>
          <Divider className="mt-4" orientation="horizontal" />
        </Grid>

        <Grid item md={12}>
          <Typography className="font-extralight text-left text-5xl mt-2 capitalize antialiased">
            {data.description}
          </Typography>
          <Stack direction="row" spacing={24} className="mt-4">
            <Avatar
              alt="Remy Sharp"
              src={`${data.icon}`}
              sx={{ width: 230, height: 170 }}
            />
            <Typography className="font-black text-left text-9xl ml-4 mt-4 mr-6 antialiased">
              {data.temp}°
            </Typography>
            <Stack>
              <Typography className="font-semibold text-left text-2xl ml-6 mt-8 uppercase antialiased">
                sensación térmica
              </Typography>
              <Typography className="font-thin text-left text-4xl ml-6 mt-2 antialiased">
                {data.feels_like}°
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        {/* tempMax tempMin */}
        <Grid item>
          <Stack direction="row" spacing={8} className="mt-12">
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
                <Typography className="font-medium text-center text-6xl mt-1 capitalize antialiased">
                  {data.temp_max}°
                </Typography>
              </Stack>
            </Stack>
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
                <Typography className="font-medium text-center text-6xl mt-1 capitalize antialiased">
                  {data.temp_min}°
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Stack item direction="row" spacing={8} className="mt-8">
          <Grid item className="tempMin"></Grid>
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
                    <Typography className="uppercase font-normal text-lg text-center mt-2">
                      {data.sunrise}
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
                    <Typography className="uppercase font-normal text-lg text-center mt-2">
                      {data.sunset}
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
                  {data.humidity}
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
      </Grid>
    </Box>
    // <CurrentSkeleton />
  );
};

export default CurrentWeatherPaper;
