import { Box, Grid, Pagination, Typography, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BoardListItem from 'src/components/BoardListItem';
import PopularCard from 'src/components/PopularCard'
import usePagingHook from 'src/hooks/paging.hook';
import { IPreviewItem } from 'src/interfaces';
import { BOARD_LIST } from 'src/mock';
import { getPageCount } from 'src/utils';

export default function SearchView() {

    const { content } = useParams();
    const { boardList, viewList, pageNumber, onPageHandler, COUNT } = usePagingHook(content as string);

    // const COUNT = 5;

    // const [boardList, setBoardList] = useState<IPreviewItem[]>([]);
    // const [viewList, setViewList] = useState<IPreviewItem[]>([]);
    // const [pageNumber, setPageNumber] = useState<number>(1);

    // const onPageHandler = (page: number) => {
    //     setPageNumber(page);

    //     const tmpList: IPreviewItem[] = [];
    //     const startIndex = COUNT * (page - 1);
    //     const endIndex = COUNT * page - 1;

    //     for (let index = startIndex; index <= endIndex; index++) {
    //         if (boardList.length < index + 1) break;
    //         tmpList.push(boardList[index]);
    //     }

    //     setViewList(tmpList);
    // }

    // useEffect(() => {
    //     const tmp = BOARD_LIST.filter((board) => board.boardTitle.includes(content as string))
    //     setBoardList(tmp);
    // }, [])

    // useEffect(() => {
    //     onPageHandler(pageNumber)
    // }, [boardList])
    
  return (
    <Box sx={{ p: '40px 120px', backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <Box sx={{ fontSize: '24px', fontWeight: 500 }}>
            <Box component='strong'>{content}</Box>
            <Typography component='span' sx={{ fontSize: '24px', fontWeight: 500, opacity: 0.7 }}>에 대한 검색결과 입니다. </Typography>
            <Box component='strong'>{boardList.length}</Box>
        </Box>
        <Box sx={{ pt: '20px', pb: '80px' }}>
            <Grid container spacing={3}>
                <Grid item sm={12} md={8}>
                    <Stack spacing={2}>
                        {viewList.map((boardItem) => (<BoardListItem item={boardItem}/>))}
                    </Stack>
                </Grid>
                <Grid item sm={12} md={4}>
                    <PopularCard title='연관 검색어' />
                </Grid>
            </Grid>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination page={pageNumber} count={getPageCount(boardList, COUNT)} onChange={(event, value) => {onPageHandler(value)}} />
        </Box>
    </Box>
  )
}
