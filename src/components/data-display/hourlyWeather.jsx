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

  return (
    <Box component={Paper} className="shadow-xl">
      <Grid container class>
        <Grid item md={12}>
          <Typography className="mb-4 text-3xl font-light text-center">
            PRONOSTICO POR HORA
          </Typography>
        </Grid>
        <Grid item className="p-2" md={12}>
          <TableContainer>
            <Table>
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell
                    align="center"
                    className="font-extralight antialiased text-lg capitalize"
                    width="5%"
                  >
                    estado
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    className="font-extralight text-lg capitalize antialiased"
                    width="100%"
                  >
                    hora
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    className="font-extralight text-lg capitalize antialiased"
                    width="100%"
                  >
                    prob. de lluvia
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    className="font-extralight text-lg capitalize antialiased"
                    width="100%"
                  >
                    temp. mínima
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    className="font-extralight text-lg capitalize antialiased"
                    width="100%"
                  >
                    temp. máxima
                  </StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {data.forecasts.map((row) => (
                  <StyledTableRow
                    key={row.dt}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell
                      align="center"
                      className="font-light"
                      width="5%"
                    >
                      <IconButton
                        onClick={() => {
                          setSelectedHour(row);
                        }}
                      >
                        <Avatar
                          alt=""
                          src={row.icon}
                          sx={{ width: 30, height: 30 }}
                        />
                      </IconButton>
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      className="font-semibold"
                      width="100%"
                    >
                      {row.dt}
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      className="font-light"
                      width="100%"
                    >
                      {Math.round(row.pop)} %
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      className="font-medium"
                      width="100%"
                    >
                      {Math.round(row.temp_min)} °
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      className="font-medium"
                      width="100%"
                    >
                      {Math.round(row.temp_max)} °
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
              {/* <HourlySkeleton /> */}
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HourlyWeatherPaper;
