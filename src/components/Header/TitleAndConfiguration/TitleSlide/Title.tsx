import { Box, Typography } from "@mui/material";
import color from '../../../../utils/MuiColors'

export default function Title() {
  return (
    <Box>
      <Typography
        px={2}
        border={1}
        borderColor={"transparent"}
        py={0.5}
        borderRadius={2}
        sx={{ "&:hover": { border: `1px solid ${color.text}` } }}
        color={color.text}
      >
        Untitled Presentation
      </Typography>
    </Box>
  );
}
