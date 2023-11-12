import { Box, Divider, Stack } from "@mui/material";
import color from "../../../utils/MuiColors";
import SlidesTools from "./slidesTools";
import TextTools from "./textTools";
import ObjectsTools from "./objectsTools";

export default function ToolsComponents() {
  return (
    <Stack
      direction={"row"}
      py={1}
      px={4}
      bgcolor={color.backgroundTwo}
      borderRadius={7}
      divider={<Divider sx={{ mx: 1 }} orientation="vertical" flexItem />}
    >
      <SlidesTools />
      <TextTools />
      <ObjectsTools />
    </Stack>
  );
}
