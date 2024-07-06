/* eslint-disable react/prop-types */
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";

function StatBox({ title, value, increase, icon, description }) {
  const theme = useTheme();
  return (
    <Box
      gridColumn="span 2"
      gridRow="span 1"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p="1.25rem 1rem"
      flex="1 1 100%"
      background={`linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`}
      borderRadius="0.55rem"
      boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      sx={{
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <FlexBetween>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.secondary[100],
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
          }}
        >
          {title}
        </Typography>
        {icon}
      </FlexBetween>

      <Typography
        variant="h3"
        fontWeight="600"
        sx={{
          color: theme.palette.secondary[200],
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
        }}
      >
        {value}
      </Typography>
      <FlexBetween gap="1rem">
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{
            color: theme.palette.secondary.light,
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
          }}
        >
          {increase}
        </Typography>
        <Typography
          sx={{
            color: theme.palette.secondary[300],
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
          }}
        >
          {description}
        </Typography>
      </FlexBetween>
    </Box>
  );
}

export default StatBox;
