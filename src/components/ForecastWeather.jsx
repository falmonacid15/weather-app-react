import {
  Avatar,
  ButtonBase,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

import React, { useEffect, useState } from "react";

const ForecastWeather = (props) => {
  const forecastWeatherObject = props.forecast;

  const [forecast, setForecast] = useState({
    city: "",
    country: "",
    forecats: [],
  });

  useEffect(() => {
    setForecast((prevState) => ({
      ...prevState,
      city: forecastWeatherObject.city.name,
    }));
  }, [props.forecast]);
  return (
    <>
      <Grid item xs={12} md={6} sx={{ mb: 4, ml: 2 }}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Pronostico por hora
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 80 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Estado</TableCell>
                <TableCell align="left">HORA</TableCell>
                <TableCell align="center">
                  <ButtonBase sx={{ width: 70, height: 70 }} disabled={true}>
                    <img alt="complex" src="icons/instruments/humidity.svg" />
                  </ButtonBase>
                </TableCell>
                <TableCell align="center">
                  <ButtonBase sx={{ width: 70, height: 70 }} disabled={true}>
                    <img
                      alt="complex"
                      src="icons/instruments/thermometer-colder.svg"
                    />
                  </ButtonBase>
                </TableCell>
                <TableCell align="center">
                  <ButtonBase sx={{ width: 70, height: 70 }} disabled={true}>
                    <img
                      alt="complex"
                      src="icons/instruments/thermometer-warmer.svg"
                    />
                  </ButtonBase>
                </TableCell>
                <TableCell align="center">
                  <ButtonBase sx={{ width: 70, height: 70 }} disabled={true}>
                    <img alt="complex" src="icons/instruments/raindrops.svg" />
                  </ButtonBase>
                </TableCell>
                <TableCell align="center">
                  <ButtonBase sx={{ width: 70, height: 70 }} disabled={true}>
                    <img
                      alt="complex"
                      src="icons/instruments/thermometer.svg"
                    />
                  </ButtonBase>
                </TableCell>
                <TableCell align="center">
                  {/* <ButtonBase sx={{ width: 70, height: 70 }} disabled={true}>
                    <img
                      alt="complex"
                      src="icons/instruments/.svg"
                    />
                  </ButtonBase> */}
                  descripcion
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {forecastWeatherObject.forecats.map((row) => (
                <TableRow
                  key={row.date}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Avatar src={row.icon}></Avatar>
                  </TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">{row.humidity}</TableCell>
                  <TableCell align="right">{row.temp_min}</TableCell>
                  <TableCell align="right">{row.temp_max}</TableCell>
                  <TableCell align="right">{row.pop}</TableCell>
                  <TableCell align="right">{row.feels_like}</TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                </TableRow>
              ))} */}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
};

export default ForecastWeather;
