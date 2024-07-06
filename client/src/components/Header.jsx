/* eslint-disable react/prop-types */
import { Typography, Box, useTheme } from "@mui/material";
import { useState } from "react";

function Header({ title, subtitle }) {
  const theme = useTheme();
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        p: 3,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: "8px",
        boxShadow: hovered
          ? `0px 16px 32px ${theme.palette.grey[700]}`
          : `0px 4px 12px ${theme.palette.grey[700]}`,
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        transition: "all 0.3s ease",
        transform: hovered
          ? "translateY(-10px) rotateX(10deg) rotateY(10deg)"
          : "translateY(0) rotateX(0) rotateY(0)",
      }}
    >
      <Typography
        variant="h2"
        color={theme.palette.primary.contrastText}
        fontWeight="bold"
        sx={{
          mb: 1,
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        color={theme.palette.secondary.contrastText}
        sx={{
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
}

export default Header;
