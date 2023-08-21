// Home.js
import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "15%" }}>
      <div>
        <h1>Ramsoft React assessment</h1>
        <Button component={Link} to="/board" variant="contained" color="primary">
          Go to board
        </Button>
      </div>
    </div>
  );
};

export default Home;
