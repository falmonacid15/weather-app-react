import {
  Box,
  Paper,
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

  console.log("weakly", data);

  const forecastsByDay = {};
  data.list.forEach((forecast) => {
    const date = moment.unix(forecast.dt).format("dd, MMMM Do");
    if (!forecastsByDay[date]) {
      forecastsByDay[date] = [];
    }
    forecastsByDay[date].push(forecast);
  });
  return (
    <Box container component={Paper} className="p-4 shadow-xl">
      <Typography className="uppercase font-semibold text-lg antialiased">
        semanal
      </Typography>
      {/* <TableContainer>
        <Table aria-label="simple table">
          <TableBody>
            {Object.keys(forecastsByDay).map((date) => () => {
              <TableRow key={date}>
                <TableCell></TableCell>
              </TableRow>;
            })}
          </TableBody>
        </Table>
      </TableContainer> */}
    </Box>
  );
};

export default WeaklyWeatherPaper;
