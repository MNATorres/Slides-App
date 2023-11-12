import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import color from "./../../../../utils/MuiColors";

export default function AddSlide() {
  return (
    <Button sx={{ color: color.icons }}>
      <AddIcon />
    </Button>
  );
}
