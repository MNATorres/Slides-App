import { Box, Stack } from '@mui/material';
import color from '../../../utils/MuiColors'
import SlidesTools from './slidesTools';

export default function ToolsComponents() {
  return (
    <Stack direction={'row'} py={1} px={4} bgcolor={color.backgroundTwo} borderRadius={7}>
      <SlidesTools />
    </Stack>
  )
}
