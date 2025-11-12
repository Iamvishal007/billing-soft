import { Box, Typography, Avatar, List, ListItemButton, ListItemText, Divider, Paper } from '@mui/material';
import { useState } from 'react';

const menuItems = [
  { label: 'Parties' },
  { label: 'Items' },
  { label: 'Billing' },
  { label: 'Reports' },
  { label: 'Settings' },
  { label: 'Logout' },
];

export default function Dashboard() {
  const [selected, setSelected] = useState('Parties');

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Sidebar */}
      <Paper
        elevation={3}
        sx={{
          width: 250,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fff',
          borderRadius: 0,
        }}
      >
        {/* Profile section */}
        <Box sx={{ p: 3, textAlign: 'center', borderBottom: '1px solid #eee' }}>
          <Avatar
            sx={{
              width: 64,
              height: 64,
              margin: '0 auto',
              bgcolor: '#1976d2',
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

        {/* Menu */}
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
        <Typography variant="caption" textAlign="center" sx={{ py: 1, color: 'text.secondary' }}>
          © 2025 BillSoft
        </Typography>
      </Paper>

      {/* Main content area */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          {selected}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          This is the {selected} section content.
        </Typography>
      </Box>
    </Box>
  );
}
