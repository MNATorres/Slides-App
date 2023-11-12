import FormatBoldIcon from '@mui/icons-material/FormatBold';
import { Button } from '@mui/material';
import color from "./../../../../utils/MuiColors";

export default function BoldTool() {
  return (
    <Button sx={{ color: color.icons }}>
      <FormatBoldIcon />
    </Button>
  )
}
