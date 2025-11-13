import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

interface FeatureCardProps {
  title: string;
  description: string;
  actionLabel: string;
  onClick: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  actionLabel,
  onClick,
}) => {
  return (
    <Card
      sx={{
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        color: "white",
        borderRadius: 3,
        p: 2,
        boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
        transition: "transform 0.3s ease",
        "&:hover": { transform: "translateY(-5px)" },
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" mb={2}>
          {description}
        </Typography>
        <Box textAlign="center">
          <Button
            variant="contained"
            onClick={onClick}
            sx={{
              background: "linear-gradient(135deg, #6b8dd6, #667eea)",
              borderRadius: 2,
              px: 3,
              "&:hover": { background: "linear-gradient(135deg, #5a67d8, #6b8dd6)" },
            }}
          >
            {actionLabel}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
