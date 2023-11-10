import { Stack } from '@mui/material'
import Title from './Title'
import Configuration from './Configuration'

export default function TitleAndConfiguration() {
  return (
    <Stack direction='row' alignItems={'center'} width={'100%'} bgcolor={'#d6e7f5'} py={2} px={4}>
      <Title />
      <Configuration />
    </Stack>
  )
}
