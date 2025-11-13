import React from "react";
import { Box, Grid, Typography, Toolbar } from "@mui/material";
import Header from "../components/header";     // 
import Sidebar from "../components/sidebar";   // 
import Footer from "../components/Footer";
import FeatureCard from "../components/FeatureCard";
import { useNavigate } from "react-router-dom";
//import AddParty from "../pages/AddParty";


interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleFeatureClick = (feature: string) => {
    alert(`You clicked: ${feature}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
      }}
    >
      {/* Header */}
      <Header />

      {/* Sidebar */}
      <Sidebar onLogout={onLogout} />

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, color: "white" }}>
        <Toolbar />

        <Typography variant="h4" fontWeight={600} mb={2}>
          Welcome Back 👋
        </Typography>

        <Typography variant="subtitle1" mb={4}>
          Manage your billing workflow efficiently.
        </Typography>

        <Grid container spacing={3}>
          {/* Create Quotation */}
          <Grid /* item xs={12} sm={6} md={4}*/>
            <FeatureCard
              title="Create Quotation"
              description="Prepare detailed quotations for your customers."
              actionLabel="Create"
              onClick={() => handleFeatureClick("Quotation")}
            />
          </Grid>

          {/* Add Item */}
          <Grid /* item /*xs={12} sm={6} md={4}*/>
            <FeatureCard
              title="Add Item"
              description="Add new products or services to your catalog."
              actionLabel="Add Item"
              onClick={() => handleFeatureClick("Item")}
            />
          </Grid>

          {/* Add Party */}
          <Grid /*item /*xs={12} sm={6} md={4}*/>
            <FeatureCard
              title="Add Party"
              description="Add or manage your customer and vendor details."
              actionLabel="Add Party"
              onClick={() => navigate("/add-party")} // ✅ Goes to Add Party page
            />
          </Grid>

          {/* Create Invoice */}
          <Grid /*item /*xs={12} sm={6} md={4}*/>
            <FeatureCard
              title="Create Invoice"
              description="Generate and send professional invoices easily."
              actionLabel="Create Invoice"
              onClick={() => handleFeatureClick("Invoice")}
            />
          </Grid>
        </Grid>

        {/* Footer */}
        <Footer />
      </Box>
    </Box>
  );
};

export default Dashboard;
