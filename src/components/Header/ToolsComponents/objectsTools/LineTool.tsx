import ShapeLineIcon from '@mui/icons-material/ShapeLine';
import { Button } from "@mui/material";
import color from "./../../../../utils/MuiColors";

export default function LineTool() {
  return (
    <Button sx={{ color: color.icons }}>
      <ShapeLineIcon />
    </Button>
  );
}
