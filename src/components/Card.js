import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

export default function Card() {
  return (
    <Box
      boxShadow={3}
      sx={{
        padding: "25px 0px 25px 40px",
        borderRadius: "20px",
        backgroundColor: "#1c1e23",
      }}
    >
      <Grid container>
        <Grid item xs={6}>
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "400",
              }}
            >
              ID :
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "400",
              }}
            >
              0001
            </Typography>
          </Box>

          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "400",
              }}
            >
              Name :
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "400",
              }}
            >
              Jeewantha
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} alignItems={"right"} justifyContent={"end"}>
          <Button variant="contained" color="success">
            Update
          </Button>
          <Button sx={{ ml: 5 }} variant="outlined" color="error">
            Delete
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
