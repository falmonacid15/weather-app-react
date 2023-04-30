import {
  Avatar,
  ButtonBase,
  Card,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

export default function WeeklyWeather() {
  return (
    <>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 1000,
          flexGrow: 1,
          mt: 2,
          mb: 2,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Stack direction="row" spacing={2} justifyContent="flex-start">
          <List
            sx={{
              bgcolor: "background.paper",
            }}
            justifyContent="center"
          >
            <ListItem>
              <Divider orientation="vertical" flexItem />
              <Grid item>
                <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
                  Lunes
                </Typography>
                <ListItemAvatar>
                  <ButtonBase sx={{ width: 128, height: 128 }} disabled={true}>
                    <img alt="complex" src="icons/generals/01d.svg" />
                  </ButtonBase>
                </ListItemAvatar>
                <ListItemText
                  primary="100%"
                  secondary="18°min | 25°max"
                  sx={{ textAlign: "center" }}
                />
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item>
                <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
                  Martes
                </Typography>
                <ListItemAvatar>
                  <ButtonBase sx={{ width: 128, height: 128 }} disabled={true}>
                    <img alt="complex" src="icons/generals/02n.svg" />
                  </ButtonBase>
                </ListItemAvatar>
                <ListItemText
                  primary="100%"
                  secondary="18°min | 25°max"
                  sx={{ textAlign: "center" }}
                />
              </Grid>
              <Grid item>
                <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
                  Miercoles
                </Typography>
                <ListItemAvatar>
                  <ButtonBase sx={{ width: 128, height: 128 }} disabled={true}>
                    <img alt="complex" src="icons/generals/02n.svg" />
                  </ButtonBase>
                </ListItemAvatar>
                <ListItemText
                  primary="100%"
                  secondary="18°min | 25°max"
                  sx={{ textAlign: "center" }}
                />
              </Grid>
              <Grid item>
                <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
                  Jueves
                </Typography>
                <ListItemAvatar>
                  <ButtonBase sx={{ width: 128, height: 128 }} disabled={true}>
                    <img alt="complex" src="icons/generals/02n.svg" />
                  </ButtonBase>
                </ListItemAvatar>
                <ListItemText
                  primary="100%"
                  secondary="18°min | 25°max"
                  sx={{ textAlign: "center" }}
                />
              </Grid>
              <Grid item>
                <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
                  Viernes
                </Typography>
                <ListItemAvatar>
                  <ButtonBase sx={{ width: 128, height: 128 }} disabled={true}>
                    <img alt="complex" src="icons/generals/02n.svg" />
                  </ButtonBase>
                </ListItemAvatar>
                <ListItemText
                  primary="100%"
                  secondary="18°min | 25°max"
                  sx={{ textAlign: "center" }}
                />
              </Grid>
            </ListItem>
          </List>
        </Stack>
      </Paper>
    </>
  );
}
