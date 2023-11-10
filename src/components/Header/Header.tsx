import { Box } from "@mui/material";
import TitleAndConfiguration from "./TitleAndConfiguration/TitleAndConfiguration";
import ToolsComponents from "./ToolsComponents/ToolsComponents";

export default function Header() {
  return (
    <Box>
      <TitleAndConfiguration />
      <ToolsComponents />
    </Box>
  );
}
