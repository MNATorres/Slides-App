import { Button } from "@mui/material";
import CropSquareIcon from '@mui/icons-material/CropSquare';
import color from "./../../../../utils/MuiColors";

export default function SquareTool() {
  return (
    <Button sx={{ color: color.icons }}>
      <CropSquareIcon />
    </Button>
  );
}
