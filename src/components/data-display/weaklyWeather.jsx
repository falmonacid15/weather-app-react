import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const WeaklyWeatherPaper = (props) => {
  const { data } = props;

  return (
    <Box component={Paper} className="shadow-xl">
      <Grid container justifyContent="center" className="p-4">
        <Grid item>
          <Typography className="uppercase font-extrabold text-xl antialiased">
            semanal
          </Typography>
        </Grid>
        <Grid item>
          <List sx={{ width: "100%", maxWidth: 400 }}>
            {data.forecasts.slice(0, 5).map((row) => (
              <ListItem className="m-1">
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src={`${row.icon}`}
                    sx={{ width: 90, height: 80 }}
                    className="mr-4"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography className="uppercase font-medium text-xl antialiased">
                        {row.day}
                      </Typography>
                      <Typography className="capitalize font-light antialiased">
                        {row.description}
                      </Typography>
                    </>
                  }
                  secondary={
                    <>
                      <Stack direction="row" spacing={2}>
                        <Stack direction="row" spacing={1}>
                          <Avatar
                            alt=""
                            src="/icons/instruments/thermometer-warmer.svg"
                            sx={{ width: 18, height: 36 }}
                          />
                          <Typography className="font-medium text-lg antialiased">
                            {Math.floor(row.temp_max)} °
                          </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                          <Avatar
                            alt=""
                            src="/icons/instruments/thermometer-colder.svg"
                            sx={{ width: 18, height: 36 }}
                          />
                          <Typography className="font-medium text-lg antialiased">
                            {Math.floor(row.temp_min)} °
                          </Typography>
                        </Stack>
                      </Stack>
                      <Stack direction="row">
                        <Avatar
                          alt="Remy Sharp"
                          src="/icons/instruments/raindrops.svg"
                          sx={{ width: 40, height: 24 }}
                        />
                        <Typography>{row.pop} %</Typography>
                      </Stack>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WeaklyWeatherPaper;
