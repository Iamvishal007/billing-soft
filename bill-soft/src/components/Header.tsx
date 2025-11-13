import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
      }}
    >
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
