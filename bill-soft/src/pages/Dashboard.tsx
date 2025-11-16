import {
  Box,
  Typography,
  Avatar,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Paper,
} from "@mui/material";
import ItemsPage from "./ItemsPage";
import React, { useState } from "react";

const menuItems = [
  { label: "Parties" },
  { label: "Items" },
  { label: "Billing" },
  { label: "Reports" },
  { label: "Settings" },
  { label: "Logout" },
];

// Example components
function Parties() {
  return <Typography>Parties content here...</Typography>;
}

function Items() {
  return <ItemsPage />;
}

function Billing() {
  return <Typography>Billing section here...</Typography>;
}

function Reports() {
  return <Typography>Reports section...</Typography>;
}

function Settings() {
  return <Typography>Settings page...</Typography>;
}

export default function Dashboard() {
  const [selected, setSelected] = useState("Parties");

  const components: Record<string, React.ReactNode> = {
    Parties: <Parties />,
    Items: <Items />,
    Billing: <Billing />,
    Reports: <Reports />,
    Settings: <Settings />,
    Logout: <Typography>Logging out...</Typography>,
  };

  return (
    <Box
      sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f5f5f5" }}
    >
      {/* Sidebar */}
      <Paper
        elevation={3}
        sx={{
          width: 250,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          borderRadius: 0,
        }}
      >
        <Box sx={{ p: 3, textAlign: "center", borderBottom: "1px solid #eee" }}>
          <Avatar
            sx={{
              width: 64,
              height: 64,
              margin: "0 auto",
              bgcolor: "#1976d2",
              mb: 1,
            }}
          >
            UR
          </Avatar>
          <Typography variant="subtitle1" fontWeight={600}>
            User
          </Typography>
          <Typography variant="body2" color="text.secondary">
            +91 9876543210
          </Typography>
        </Box>

        <List sx={{ flexGrow: 1 }}>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.label}
              selected={selected === item.label}
              onClick={() => setSelected(item.label)}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>

        <Divider />
        <Typography
          variant="caption"
          textAlign="center"
          sx={{ py: 1, color: "text.secondary" }}
        >
          © 2025 BillSoft
        </Typography>
      </Paper>

      {/* Right content */}
      <Box sx={{ flexGrow: 1, p: 3 }}>{components[selected]}</Box>
    </Box>
  );
}
