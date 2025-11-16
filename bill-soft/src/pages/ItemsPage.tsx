import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import ModalWithSidebar from "../components/common/ModalWithSidebar";
import BasicDetails from "../components/items/BasicDetails";
import type { AddItemData } from "../types/ItemTypes";

export default function ItemsPage() {
  const [open, setOpen] = useState(false);

  const [addItemData, setAddItemData] = useState<AddItemData>({
    itemName: "",
    category: "",
    measuringUnit: "PCS",
    taxApplicable: "",
    salesPrice: 0,
    gstRate: 0,
    openingStock: 0,
    showOnline: false,
    productType: "Product",
  });

  const sections = [
    "Basic Details",
    "Stock Details",
    "Pricing Details",
    "Party Wise Prices",
    "Custom Fields",
  ];

  const handleSaveItem = () => {
    console.log("Saved Item: ", addItemData);
  };

  const renderContent = (section: string) => {
    switch (section) {
      case "Basic Details":
        return (
          <BasicDetails
            addItemData={addItemData}
            setAddItemData={setAddItemData}
          />
        );

      case "Stock Details":
        return <Typography>Stock Details Form...</Typography>;

      case "Pricing Details":
        return <Typography>Pricing Details Form...</Typography>;

      case "Party Wise Prices":
        return <Typography>Party Wise Prices Form...</Typography>;

      case "Custom Fields":
        return <Typography>Custom fields form...</Typography>;

      default:
        return null;
    }
  };

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5">Items</Typography>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Add Item
        </Button>
      </Box>

      <ModalWithSidebar
        open={open}
        onClose={() => setOpen(false)}
        onSave={handleSaveItem}
        title="Create New Item"
        sections={sections}
        renderSection={renderContent}
      />
    </div>
  );
}
