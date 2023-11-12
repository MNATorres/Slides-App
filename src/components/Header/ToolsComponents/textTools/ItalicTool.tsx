import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import { Button } from '@mui/material';
import color from "./../../../../utils/MuiColors";

export default function ItalicTool() {
  return (
    <Button sx={{ color: color.icons }}>
      <FormatItalicIcon />
    </Button>
  )
}
