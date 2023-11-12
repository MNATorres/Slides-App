import { Box, Stack } from "@mui/material";
import Title from "./Title";
import Configuration from "./Configuration";
import DescriptionIcon from "@mui/icons-material/Description";
import color from "./../../../utils/MuiColors";

export default function TitleAndConfiguration() {
  return (
    <Stack direction={'row'} alignItems={"center"} width={"100%"} pt={2}>
      <Box>
        <DescriptionIcon
          sx={{
            fontSize: 60,
            color: color.icons,
            cursor: "pointer",
            "&:hover": { color: color.hover },
          }}
        />
      </Box>
      <Box>
        <Title />
        <Configuration />
      </Box>
    </Stack>
  );
}
