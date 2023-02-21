import { Box, Input, Divider, IconButton, Fab } from '@mui/material';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import CreateIcon from '@mui/icons-material/Create';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BOARD_LIST } from 'src/mock';
import { useUserStore } from 'src/stores';

export default function BoardUpdateView() {

  const [boardTitle, setBoardTitle] = useState<string>('');
  const [boardContent, setBoardContent] = useState<string>('');
  const { user } = useUserStore();

  const { boardNumber } = useParams();
  const navigator = useNavigate();

  useEffect(() => {
    //? 정상적이지 않은 경로로 접근을 시도했을 때
    //? main화면으로 돌려보냄
    if(!boardNumber) {
      navigator('/');
      return;
    }
    //? pathVariable로 전달받은 boardNumber에 해당하는 board 데이터를 검색해 옴
    const board = BOARD_LIST.find((item) => item.boardNumber === parseInt(boardNumber));

    //? 검색결과가 존재하지 않으면
    //? main화면으로 돌려보냄
    if(!board) {
      navigator('/');
      return;
    }
    //? 현재 로그인되어 있는지 검증
    if (!user) {
      navigator('/auth');
      return;
    }

    //? 검색된 board의 작성자가 로그인한 user와 일치하는지 검증
    if(board.writerNickname === 'Gayeong98') {
      navigator('/');
      return;
    }

    setBoardTitle(board.boardTitle);
    setBoardContent(board.boardContent);
  }, [])

  //? 일반적으로 수정페이지는 작성페이지와 거의 똑같음

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