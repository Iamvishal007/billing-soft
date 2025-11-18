import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

import ModalWithSidebar from "../components/common/ModalWithSidebar";

import PartyBasicDetails from "../components/party/PartyBasicDetails";
import AddressDetails from "../components/party/AddressDetails";
import GSTDetails from "../components/party/GSTDetails";

import type { AddPartyData } from "../types/PartyTypes";

export default function PartyPage() {
  const [open, setOpen] = useState(false);

  const [partyData, setPartyData] = useState<AddPartyData>({
    name: "",
    mobile: "",
    address: "",
    gstin: "",
  });

  // Sections to show in left menu
  const sections = [
    "Basic Details",
    "Address",
    "GST Details",
    "Custom Fields",
  ];

  // Handle Save
  const handleSaveParty = () => {
    console.log("Saved Party:", partyData);
    setOpen(false);
  };

  // Render content for each section
  const renderContent = (section: string) => {
    switch (section) {
      case "Basic Details":
        return (
          <PartyBasicDetails
            partyData={partyData}
            setPartyData={setPartyData}
          />
        );

      case "Address":
        return (
          <AddressDetails
            partyData={partyData}
            setPartyData={setPartyData}
          />
        );

      case "GST Details":
        return (
          <GSTDetails
            partyData={partyData}
            setPartyData={setPartyData}
          />
        );

      case "Custom Fields":
        return <Typography>Custom fields form…</Typography>;

      default:
        return null;
    }
  };

  return (
    <div>
      {/* Title + Button */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5">Parties</Typography>

        <Button variant="contained" onClick={() => setOpen(true)}>
          Add Party
        </Button>
      </Box>

      {/* Modal */}
      <ModalWithSidebar
        open={open}
        onClose={() => setOpen(false)}
        onSave={handleSaveParty}
        title="Create New Party"
        sections={sections}
        renderSection={renderContent}
      />
    </div>
  );
}
