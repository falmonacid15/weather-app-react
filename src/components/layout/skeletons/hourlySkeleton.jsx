import {
  Avatar,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const HourlySkeleton = () => {
  return (
    <>
      <TableBody>
        {[...Array(8)].map((_, index) => (
          <TableRow key={index}>
            <TableCell>
              <Skeleton variant="circle">
                <Avatar />
              </Skeleton>
            </TableCell>
            <TableCell width="10%">
              <Skeleton />
            </TableCell>
            <TableCell width="10%">
              <Skeleton />
            </TableCell>
            <TableCell width="10%">
              <Skeleton />
            </TableCell>
            <TableCell width="10%">
              <Skeleton />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default HourlySkeleton;
