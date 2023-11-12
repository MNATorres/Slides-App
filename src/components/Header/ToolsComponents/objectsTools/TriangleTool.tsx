import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import { Button } from "@mui/material";
import color from "./../../../../utils/MuiColors";

export default function TriangleTool() {
  return (
    <Button sx={{ color: color.icons }}>
      <ChangeHistoryIcon />
    </Button>
  );
}
