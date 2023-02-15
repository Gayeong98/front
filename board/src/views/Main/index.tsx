import { Box } from '@mui/system'
import React from 'react'
import MainContents from './MainContents'
import MainHead from './MainHead'

export default function Main() {
  return (
    <Box sx={{pl: '120px', pr: '120px'}}>
        <MainHead />
        <MainContents />
    </Box>
  )
}
