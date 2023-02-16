import { Avatar, Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { IPriviewItem } from "src/interfaces";
import BoardListItem from "../BoardListItem";

interface Props {
  previewItem: IPriviewItem;
}

export default function PreviewCard({ previewItem }: Props) {

    const backgroundImage = `url(${previewItem.img})`

  return (
    <Box sx={{ p: '24px' }}>
      <Card sx={{ p: '24px', height: "508px", backgroundImage: backgroundImage, backgroundPosition: 'center', display: 'flex', flexDirection: 'column-reverse'}}>
          <Box sx={{ display: 'flex'}}>
            <Box sx={{ mr: '8px' }}>
                <Avatar alt="Remy Sharp" src={previewItem.writerProfile} />
            </Box>
            <Box>
                <Typography sx={{ fontSize: '12px', fontWeight: 500, color: '#ffffff'}}>{previewItem.writerNickname}</Typography>
                <Typography sx={{ mt: '2px', fontSize: '12px', fontWeight: 400, color: 'rgba(255, 255, 255, 0.7)'}}>{previewItem.writeDate}</Typography>
            </Box>
            </Box>
            <Box sx={{ mt: '16px', mb: '16px' }}>
                <Typography sx={{fontSize: '16px', fontWeight: 500, color: '#ffffff'}}>{previewItem.boardTitle}</Typography>
                <Typography sx={{mt: '5px', fontSize: '12px', fontWeight: 400, color: 'rgba(255, 255, 255, 0.7)'}}>{previewItem.boardContent}</Typography>
            </Box>
            <Box>
                <Typography sx={{ fontSize: '12px', fontWeight: 400, color: 'rgba(255, 255, 255, 0.7)'}}>{`댓글 ${previewItem.commentCount} · 좋아요 ${previewItem.likeCount} · 조회수 ${previewItem.viewCount}`}</Typography>
            </Box>
      </Card>
    </Box>
  );
}
