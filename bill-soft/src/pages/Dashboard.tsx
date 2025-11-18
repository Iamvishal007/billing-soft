import React, { useState } from "react";
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
import PartyPage from "./PartyPage"; // make sure this path/casing is correct
import { useNavigate } from "react-router-dom";

/* ------------------ MENU ITEMS ------------------ */
const menuItems = [
  { label: "Parties" },
  { label: "Items" },
  { label: "Billing" },
  { label: "Reports" },
  { label: "Settings" },
  { label: "Logout" },
];

/* ------------------ PARTIES SECTION ------------------ */
function PartiesSection() {
  // If you want Parties to manage its own navigation or modal, PartyPage handles that.
  return <PartyPage />;
}

/* ------------------ OTHER SECTIONS ------------------ */
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

/* ------------------ MAIN DASHBOARD ------------------ */
interface DashboardProps {
  onLogout: () => void;
}

export default function Dashboard({ onLogout }: DashboardProps) {
  const [selected, setSelected] = useState<string>("Parties");
  const navigate = useNavigate();

  // map menu label -> component
  const components: Record<string, React.ReactNode> = {
    Parties: <PartiesSection />,
    Items: <Items />,
    Billing: <Billing />,
    Reports: <Reports />,
    Settings: <Settings />,
    Logout: <Typography>Logging out...</Typography>,
  };

  const handleMenuClick = (label: string) => {
    if (label === "Logout") {
      // call parent's logout handler and navigate to login
      onLogout();
      navigate("/login");
      return;
    }

    // other items: simply update selected view
    setSelected(label);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* ------------------ SIDEBAR ------------------ */}
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
        <Box
          sx={{ p: 3, textAlign: "center", borderBottom: "1px solid #eee" }}
        >
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

        {/* Menu List */}
        <List sx={{ flexGrow: 1 }}>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.label}
              selected={selected === item.label}
              onClick={() => handleMenuClick(item.label)}
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

      {/* ------------------ RIGHT CONTENT ------------------ */}
      <Box sx={{ flexGrow: 1, p: 3 }}>{components[selected]}</Box>
    </Box>
  );
}
