import { Avatar, Box, Grid, Paper, Stack, Typography } from "@mui/material";
import moment from "moment";
import React from "react";

const SunsetAndSunrisePaper = (props) => {
  const { data } = props;
  return (
    <Box component={Paper} container className="shadow-xl">
      <Stack direction="row" spacing={12} className="justify-center mb-8 mt-8">
        {/* sunrise */}
        <Grid item>
          <Stack direction="row">
            <Avatar
              alt="Remy Sharp"
              src="/icons/instruments/sunrise.svg"
              sx={{ width: 70, height: 70 }}
            />
            <Stack direction="column">
              <Typography className="uppercase font-semibold text-lg">
                Amanecer
              </Typography>
              <Typography className="uppercase font-light text-lg">
                {moment.unix(data.sys.sunrise).format("HH:mm")}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        {/* sunset */}
        <Grid item className="mb-1">
          <Stack direction="row">
            <Avatar
              alt="Remy Sharp"
              src="/icons/instruments/sunset.svg"
              sx={{ width: 70, height: 70 }}
            />
            <Stack direction="column">
              <Typography className="uppercase font-semibold text-lg antialiased">
                atardecer
              </Typography>
              <Typography className="uppercase font-light text-lg antialiased">
                {moment.unix(data.sys.sunset).format("HH:mm")}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Stack>
    </Box>
  );
};

export default SunsetAndSunrisePaper;
