import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Card from "../components/Card";
import Logo from "../logo.svg";

export default function Home() {
  return (
    <Box>
      <Grid container>
        <Grid xs={12}>
          <Box>
            <TextField
              sx={{
                width: "100%",
                color: "white",
                backgroundColor: "white",
                mb: 5,
              }}
              disabled
              id="filled-disabled"
              label="ID Number"
              variant="filled"
            />

            <TextField
              sx={{
                width: "100%",
                color: "white",
                backgroundColor: "white",
                mb: 5,
              }}
              id="filled-basic"
              label="Name"
              variant="filled"
            />
            <Button sx={{ width: "100%", height: "60px" }} variant="contained">
              Save
            </Button>
          </Box>
        </Grid>

        <Grid xs={12}>
          <Typography
            sx={{
              fontSize: "50px",
              fontWeight: "600",
            }}
          >
            Name List
          </Typography>
          <Card />
        </Grid>
      </Grid>
    </Box>
  );
}
