import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import moment from "moment";
import React from "react";

const WeaklyWeatherPaper = (props) => {
  const { data } = props;

  const forecastsByDay = data.list.reduce((acc, forecast) => {
    const day = moment(forecast.dt_txt).format("dddd");
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(forecast);
    return acc;
  }, {});

  const forecastsByDayArray = Object.keys(forecastsByDay).map((day) => {
    return {
      day,
      forecasts: forecastsByDay[day],
    };
  });

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

  return (
    <Box container component={Paper} className="shadow-xl">
      <Typography className="uppercase font-extrabold text-xl text-center antialiased">
        semanal
      </Typography>
      <List sx={{ width: "100%", maxWidth: 400 }}>
        {result.slice(0, 5).map((row) => (
          <ListItem alignItems="flex-start" className="m-1">
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
                    <Typography>{Math.round(row.prop * 100)} %</Typography>
                  </Stack>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default WeaklyWeatherPaper;
