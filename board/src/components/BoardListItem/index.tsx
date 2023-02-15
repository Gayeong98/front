import { Avatar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function BoardListItem() {
  return (
    <Box>
        <Box sx={{ display: 'flex' }}>
            <Box>
                <Avatar alt="Remy Sharp" src="" />
            </Box>
            <Box>
                <Typography>Nickname</Typography>
                <Typography>2023. 02. 15.</Typography>
            </Box>
        </Box>
        <Box>
            <Typography>Title</Typography>
            <Typography>Contents</Typography>
        </Box>
        <Box>
            <Typography>{`댓글 0 · 좋아요 0 · 조회수 0`}</Typography>
        </Box>
    </Box>
  )
}
