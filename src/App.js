import "./App.css";
import Logo from "./logo.svg";
import Home from "./layouts/Home";
import { Box, Typography } from "@mui/material";

function App() {
  return (
    <div>
      <header className="App-header">
        <Box>
          <img className="App-logo" src={Logo} alt="logo" />
          <Typography
            sx={{
              fontSize: "80px",
              fontWeight: "600",
            }}
          >
            MERN CRUD APP
          </Typography>
        </Box>
        <Home />
      </header>
    </div>
  );
}

export default App;
