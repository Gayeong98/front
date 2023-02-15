import { Box, Card, CardMedia, Grid } from "@mui/material";
import React from "react";
import { IPriviewItem } from "src/interfaces";
import BoardListItem from "../BoardListItem";

interface Props {
  previewItem: IPriviewItem;
}

export default function PreviewCard({ previewItem }: Props) {

    const backgroundImage = `url(${previewItem.img})`

  return (
    <Card sx={{ height: "508px", backgroundImage: backgroundImage, backgroundPosition: 'center'}}>
      <BoardListItem />
    </Card>
  );
}
