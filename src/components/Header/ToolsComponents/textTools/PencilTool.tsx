import CreateIcon from '@mui/icons-material/Create';
import { Button } from '@mui/material';
import color from "./../../../../utils/MuiColors";

export default function PencilTool() {
  return (
    <Button sx={{ color: color.icons }}>
      <CreateIcon />
    </Button>
  )
}