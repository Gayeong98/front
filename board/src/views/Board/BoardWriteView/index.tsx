import { Box, Divider, Fab, IconButton, Input } from '@mui/material'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import CreateIcon from '@mui/icons-material/Create';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function BoardWriteView() {

  const [ boardTitle, setBoardTitle ] = useState<string>('');
  const [ boardContent, setBoardContent ] = useState<String>('');

  const navigator = useNavigate();

  const onWriteHandler = () => {
    //? 제목 및 내용 검증(값이 존재하는지)
    if (!boardTitle.trim() || !boardContent.trim()){
      alert('모든 내용을 입력해주세요.')
      return;
    }

    //? 존재한다면 작성 기능 활성화
    //# User Table
    //^ userEmail VARCHAR(45) PRIMARY KEY;

    //# Board table
    //^ boardNumber INT AI PRIMARY KEY;
    //^ boardTitle TEXT NOT NULL;
    //^ boardContent TEXT NOT NULL;
    //^ writeDate DATETIME NOT NULL;
    //^ writerEmail VARCHAR(45) FOREIGN KEY NOT NULL;
    //^ likeCount INT default 0;
    //^ commentCount INT default 0;
    //^ viewCount INT default 0;

    //? INSERT INTO (boardTitle, boardContent, writeDate, writerEmail)
    //? VALUES (?, ?, now(), ?)
    
    //? Back end로 boardTitle, boardContent, writerEmail을 넘겨주면 됨
    navigator('/myPage');

  }

  return (
    <Box sx={{ p: '0px 120px', backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      <Box sx={{ p: '100px 24px', backgroundColor: '#ffffff' }}>
        <Input fullWidth placeholder='제목을 입력하세요.' disableUnderline sx={{fontSize: '32px', fontWeight: 500}} onChange={(event) => setBoardTitle(event.target.value) } />
        <Divider sx={{m: '48px 0px'}}/>
        <Box sx={{ display: 'flex', alignItems: 'start'}} >
          <Input fullWidth disableUnderline multiline minRows={20} placeholder='본문을 작성해주세요.' sx={{fontSize: '18px', fontWeight: 500, lineHeight: '150%' }} onChange={(event) => setBoardContent(event.target.value)} />
          <IconButton>
            <ImageOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
      <Fab sx={{ position: 'fixed', right: '248px', bottom: '200px', backgroundColor: 'rgba(0, 0, 0, 0.7)'}} onClick = {onWriteHandler}>
        <CreateIcon />
      </Fab>
    </Box>
  )
}
