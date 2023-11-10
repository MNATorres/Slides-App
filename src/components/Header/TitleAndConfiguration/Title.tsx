import { Box, Typography } from "@mui/material";

export default function Title() {
  return (
    <Box>
      <Typography
        px={4}
        border={1}
        borderColor={"transparent"}
        py={0.5}
        borderRadius={2}
        sx={{ "&:hover": { border: "1px solid black" } }}
      >
        Untitled Presentation
      </Typography>
    </Box>
  );
}
