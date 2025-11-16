import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";

interface ModalWithSidebarProps {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
  title: string;
  sections: string[];
  renderSection: (section: string) => React.ReactNode;
}

export default function ModalWithSidebar({
  open,
  onClose,
  onSave,
  title,
  sections,
  renderSection,
}: ModalWithSidebarProps) {
  const [active, setActive] = useState(sections[0]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{ sx: { borderRadius: 2 } }}
    >
      {/* Title */}
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography fontWeight={600}>{title}</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ display: "flex", flexDirection: "column", p: 0 }}>
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          {/* Left Sidebar */}
          <Box
            sx={{
              width: 220,
              borderRight: "1px solid #eee",
              p: 2,
              backgroundColor: "#fafafa",
            }}
          >
            <List>
              {sections.map((sec) => (
                <ListItemButton
                  key={sec}
                  selected={active === sec}
                  onClick={() => setActive(sec)}
                  sx={{ borderRadius: 1 }}
                >
                  <ListItemText primary={sec} />
                </ListItemButton>
              ))}
            </List>
          </Box>

          {/* Right Content */}
          <Box sx={{ flexGrow: 1, p: 3 }}>{renderSection(active)}</Box>
        </Box>

        {/* Footer Buttons */}
        <Divider />

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
            p: 2,
            backgroundColor: "#fff",
          }}
        >
          <Button onClick={onClose} variant="outlined" sx={{ width: 100 }}>
            Cancel
          </Button>
          <Button variant="contained" onClick={onSave} sx={{ width: 100 }}>
            Save
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
