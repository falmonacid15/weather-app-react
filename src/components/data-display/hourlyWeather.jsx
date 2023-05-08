import styled from "@emotion/styled";
import {
  Avatar,
  Box,
  Divider,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  tableCellClasses,
} from "@mui/material";
import moment from "moment/moment";
import React from "react";
import HourlySkeleton from "../layout/skeletons/HourlySkeleton";
import { useState } from "react";

const HourlyWeatherPaper = (props) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {},
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const { data } = props;

  const [selectedHour, setSelectedHour] = useState({});

  console.log("selectedhour", selectedHour);

  return (
    <Box component={Paper} container className="shadow-xl">
      <Grid item>
        <Typography className="mb-4 text-3xl font-light text-center">
          PRONOSTICO POR HORA
        </Typography>
      </Grid>
      <Grid item className="p-2">
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell
                  align="center"
                  className="font-extralight antialiased text-lg capitalize"
                  width="2%"
                >
                  estado
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  className="font-extralight text-lg capitalize antialiased"
                  width="10%"
                >
                  hora
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  className="font-extralight text-lg capitalize antialiased"
                  width="10%"
                >
                  probabilidad de lluvia
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  className="font-extralight text-lg capitalize antialiased"
                  width="10%"
                >
                  temperatura mínima
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  className="font-extralight text-lg capitalize antialiased"
                  width="10%"
                >
                  temperatura máxima
                </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {data.list.map((row) => (
                <StyledTableRow
                  key={row.dt}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell
                    align="center"
                    className="font-light"
                    width="2%"
                  >
                    <IconButton
                      onClick={() => {
                        setSelectedHour(row);
                      }}
                    >
                      <Avatar
                        alt=""
                        src={row.weather[0].icon}
                        sx={{ width: 50, height: 35 }}
                      />
                    </IconButton>
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    className="font-semibold"
                    width="5%"
                  >
                    {moment.unix(row.dt).format("HH:mm")}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    className="font-light"
                    width="5%"
                  >
                    {Math.round(row.pop * 100)} %
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    className="font-medium"
                    width="5%"
                  >
                    {Math.round(row.main.temp_min)} °
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    className="font-medium"
                    width="5%"
                  >
                    {Math.round(row.main.temp_max)} °
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
            {/* <HourlySkeleton /> */}
          </Table>
        </TableContainer>
      </Grid>
    </Box>
  );
};

export default HourlyWeatherPaper;
