import { styled } from "@mui/material/styles";
import {
  Avatar,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

import React from "react";

function generate(element) {
  return [0, 1, 2, 3, 4].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const ForecastWeather = () => {
  return (
    <>
      <Grid item xs={12} md={6} sx={{ mb: 4, ml: 2 }}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Pronostico por hora
        </Typography>
        <Demo>
          <List dense={""}>
            {generate(
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <InfoIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="icons/generals/02n.svg" />
                </ListItemAvatar>
                <ListItemText primary="10:00 hrs | 95%" secondary={"hola"} />
              </ListItem>
            )}
          </List>
        </Demo>
      </Grid>
    </>
  );
};

export default ForecastWeather;
