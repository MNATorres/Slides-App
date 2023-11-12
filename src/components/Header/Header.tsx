import { Box, Stack } from "@mui/material";
import TitleAndConfiguration from "./TitleAndConfiguration/TitleAndConfiguration";
import ToolsComponents from "./ToolsComponents/ToolsComponents";
import color from "./../../utils/MuiColors";

export default function Header() {
  return (
    <Stack
      direction="row"
      alignItems={"center"}
      bgcolor={color.background}
      py={1}
      px={3}
      color={color.text}
    >
      
      <Box>
        <TitleAndConfiguration />
        <ToolsComponents />
      </Box>
    </Stack>
  );
}
