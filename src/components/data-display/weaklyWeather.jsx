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
  Typography,
} from "@mui/material";
import React from "react";

const WeaklyWeatherPaper = () => {
  return (
    <Box container component={Paper} className="p-4 shadow-xl">
      <Typography className="uppercase font-semibold text-lg antialiased">
        semanal
      </Typography>
    </Box>
  );
};

export default WeaklyWeatherPaper;
