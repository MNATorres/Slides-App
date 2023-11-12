import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { Button } from '@mui/material';
import color from "./../../../../utils/MuiColors";

export default function UnderlinedTool() {
  return (
    <Button sx={{ color: color.icons }}>
      <FormatUnderlinedIcon />
    </Button>
  )
}