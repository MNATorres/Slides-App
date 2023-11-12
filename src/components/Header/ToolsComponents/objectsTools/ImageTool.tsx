import { Button } from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import color from "./../../../../utils/MuiColors";

export default function ImageTool() {
  return (
    <Button sx={{ color: color.icons }}>
      <ImageIcon />
    </Button>
  );
}