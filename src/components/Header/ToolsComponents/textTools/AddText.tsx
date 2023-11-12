import TextFieldsIcon from '@mui/icons-material/TextFields';
import { Button } from '@mui/material';
import color from "./../../../../utils/MuiColors";

export default function AddText() {
  return (
    <Button sx={{ color: color.icons }}>
      <TextFieldsIcon />
    </Button>
  )
}
