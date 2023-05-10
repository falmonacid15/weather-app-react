import {
  Avatar,
  Box,
  Divider,
  Grid,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const CurrentSkeleton = () => {
  return (
    <Box component={Paper} className="shadow-xl">
      <Grid container justifyContent="center" className="p-4">
        <Grid item md={12}>
          <Skeleton variant="text" width="50%" height="100%" />
          <Skeleton variant="text" width="50%" height="100%" />
          <Skeleton variant="text" width="50%" height="100%" />
          <Divider className="mt-4" orientation="horizontal" />
        </Grid>

        <Grid item md={12}>
          <Skeleton variant="text" width="50%" height="100%" />
          <Stack direction="row" spacing={24} className="mt-4">
            <Skeleton variant="rounded" width="50%" height="100%" />
            <Skeleton variant="text" width="50%" height="100%" />
            <Stack>
              <Skeleton variant="text" width="50%" height="100%" />
              <Skeleton variant="text" width="50%" height="100%" />
            </Stack>
          </Stack>
        </Grid>
        {/* tempMax tempMin */}
        <Grid item>
          <Stack direction="row" spacing={8} className="mt-12">
            <Stack direction="row">
              <Skeleton variant="rounded" width="50%" height="100%" />
              <Stack direction="column">
                <Skeleton variant="text" width="50%" height="100%" />
                <Skeleton variant="text" width="50%" height="100%" />
              </Stack>
            </Stack>
            <Stack direction="row">
              <Skeleton variant="rounded" width="50%" height="100%" />
              <Stack direction="column">
                <Skeleton variant="text" width="50%" height="100%" />
                <Skeleton variant="text" width="50%" height="100%" />
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Divider className="mt-4" />
        <Stack direction="row" className="justify-center" spacing={8}>
          {/* sunrise sunset */}
          <Grid item>
            <Stack direction="row" spacing={4} className="justify-left mt-2">
              {/* sunrise */}
              <Grid item>
                <Stack direction="column">
                  <Skeleton variant="rounded" width="50%" height="100%" />
                  <Stack direction="column">
                    <Skeleton variant="text" width="50%" height="100%" />
                    <Skeleton variant="text" width="50%" height="100%" />
                  </Stack>
                </Stack>
              </Grid>
              {/* sunset */}
              <Grid item>
                <Stack direction="column">
                  <Skeleton variant="rounded" width="50%" height="100%" />
                  <Stack direction="column">
                    <Skeleton variant="text" width="50%" height="100%" />
                    <Skeleton variant="text" width="50%" height="100%" />
                  </Stack>
                </Stack>
              </Grid>
            </Stack>
          </Grid>
          {/* humidity */}
          <Grid item>
            <Stack direction="column" spacing={2}>
              <Skeleton variant="text" width="50%" height="100%" />
              <Stack direction="row" className="ml-9">
                <Skeleton variant="text" width="50%" height="100%" />
                <Skeleton variant="text" width="50%" height="100%" />
              </Stack>
            </Stack>
          </Grid>
        </Stack>
      </Grid>
    </Box>
  );
};

export default CurrentSkeleton;
