import { Box, Button } from '@mui/material'
import color from '../../../../utils/MuiColors'

export default function Configuration() {
  return (
    <Box>
      <Button sx={{color: color.icons, px: 2}} >Full Screen</Button>
    </Box>
  )
}
