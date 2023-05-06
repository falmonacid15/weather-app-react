import {
  Avatar,
  Box,
  Divider,
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
import moment from "moment/moment";
import React from "react";

const HourlyWeatherPaper = (props) => {
  const { data } = props;
  return (
    <Box component={Paper} container className="shadow-xl">
      <Grid item>
        <Typography className="mb-6 mt-2 text-3xl font-bold">
          PRONOSTICO POR HORA
        </Typography>
      </Grid>
      <Grid item className="m-2">
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  className="font-medium text-lg"
                  width="2%"
                ></TableCell>
                <TableCell
                  align="center"
                  className="font-medium text-lg "
                  width="10%"
                >
                  HORA
                </TableCell>
                <TableCell
                  align="center"
                  className="font-medium text-lg"
                  width="20%"
                >
                  PROB LLUVIA
                </TableCell>
                <TableCell
                  align="center"
                  className="font-medium text-lg"
                  width="25%"
                >
                  TEMP MIN
                </TableCell>
                <TableCell
                  align="center"
                  className="font-medium text-lg"
                  width="25%"
                >
                  TEMP MAX
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.list.map((row) => (
                <TableRow
                  key={row.dt}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" className="font-light" width="2%">
                    <Avatar
                      alt=""
                      src={row.weather[0].icon}
                      sx={{ width: 30, height: 35 }}
                    />
                  </TableCell>
                  <TableCell align="center" className="font-medium" width="10%">
                    {moment.unix(row.dt).format("HH:mm")}
                  </TableCell>
                  <TableCell align="center" className="font-light" width="20%">
                    {Math.round(row.pop * 100)} %
                  </TableCell>
                  <TableCell align="center" className="font-light" width="25%">
                    {Math.round(row.main.temp_min)} °
                  </TableCell>
                  <TableCell align="center" className="font-light" width="25%">
                    {Math.round(row.main.temp_max)} °
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Box>
  );
};

export default HourlyWeatherPaper;
