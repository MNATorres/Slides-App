import { Button } from '@mui/material'
import color from "./../../../../utils/MuiColors";
import DeleteIcon from '@mui/icons-material/Delete';


export default function DeleteSlide() {
  return (
    <Button sx={{ color: color.icons }}>
        <DeleteIcon />
    </Button>
  )
}
