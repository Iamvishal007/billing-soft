import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        color: "white",
        textAlign: "center",
        py: 1.5,
        mt: "auto",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} BillSoft Inc. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
