import { Box, Card, Chip, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { POPULAR_LIST } from 'src/mock';

interface Props {
  title: string;
}

export default function PopularCard({ title }: Props) {

  const [popularList, setPopularList] = useState<string[]>([]);
  const navigator = useNavigate();

  useEffect(() => {
    setPopularList(POPULAR_LIST);
  }, [])

  return (
    <Card variant='outlined' sx={{ p: '24px 12px 26px 24px' }}>
        <Typography sx={{ fontSize: '24px', fontWeight: 500 }}>{title}</Typography>
        <Box sx={{ mt: '24px' }}>
          {popularList.map((popular) => (
          <Chip sx={{ mr: '12px', mb: '12px', fontSize: '14px', fontWeight: 500}} label= {popular} variant='outlined' onClick={(event) => navigator(`/search${popular}`)} />
          ))}
        </Box>
    </Card>
  )
}
