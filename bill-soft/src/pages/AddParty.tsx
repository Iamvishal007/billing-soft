import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddParty: React.FC = () => {
  // form states
  const [partyName, setPartyName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [gstin, setGstin] = useState("");

  const navigate = useNavigate();

  // form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!partyName.trim()) {
      alert("Please enter a Party Name");
      return;
    }

    const newParty = {
      partyName,
      mobile,
      address,
      gstin,
    };

    console.log("✅ New Party Added:", newParty);

    // TODO: Connect to backend API here later
    alert("Party saved successfully!");
    navigate("/dashboard");
  };

  // cancel handler
  const handleCancel = () => navigate("/dashboard");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={10}
          sx={{
            p: 4,
            borderRadius: 3,
            backgroundColor: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(10px)",
            color: "#fff",
          }}
        >
          <Typography
            variant="h5"
            fontWeight={600}
            textAlign="center"
            mb={3}
            sx={{ color: "#fff" }}
          >
            Add New Party
          </Typography>

          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                label="Party Name *"
                required
                fullWidth
                value={partyName}
                onChange={(e) => setPartyName(e.target.value)}
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor: "rgba(255,255,255,0.2)",
                    color: "white",
                  },
                  "& .MuiInputLabel-root": { color: "white" },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.3)",
                  },
                }}
              />

              <TextField
                label="Mobile Number"
                fullWidth
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor: "rgba(255,255,255,0.2)",
                    color: "white",
                  },
                  "& .MuiInputLabel-root": { color: "white" },
                }}
              />

              <TextField
                label="Address"
                fullWidth
                multiline
                minRows={2}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor: "rgba(255,255,255,0.2)",
                    color: "white",
                  },
                  "& .MuiInputLabel-root": { color: "white" },
                }}
              />

              <TextField
                label="GSTIN"
                fullWidth
                value={gstin}
                onChange={(e) => setGstin(e.target.value)}
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor: "rgba(255,255,255,0.2)",
                    color: "white",
                  },
                  "& .MuiInputLabel-root": { color: "white" },
                }}
              />
            </Stack>

            <Box
              mt={4}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button
                variant="outlined"
                color="inherit"
                onClick={handleCancel}
              >
                Cancel
              </Button>

              <Button
                type="submit"
                variant="contained"
                sx={{
                  background: "linear-gradient(135deg, #6b8dd6, #667eea)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #5a67d8, #6b8dd6)",
                  },
                }}
              >
                Save
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default AddParty;
