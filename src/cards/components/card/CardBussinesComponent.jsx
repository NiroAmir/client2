import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import {
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CallIcon from "@mui/icons-material/LocalPhone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/system";

export default function CardBusinessComponent() {
  return (
    <div>
      <Card sx={{ width: 300, m: 2, p: 2 }} raised square>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="assets/images/examplePic2.jpg"
            alt="image1"
          />
          <CardHeader title="First" subheader="subtitle" align="left" />
          <Divider variant="middle" />
          <CardContent align="left">
            <Typography>
              <strong>Phone:</strong> 050-0000000
            </Typography>
            <Typography>
              <strong>Address:</strong>Shinkin 3 tel-aviv
            </Typography>
            <Typography>
              <strong>Card Number:</strong>40000000
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions sx={{ justifyContent: "space-between" }}>
          <Box>
            <IconButton aria-label="Delete Card">
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit Card">
              <EditIcon />
            </IconButton>
          </Box>
          <box>
            <IconButton aria-label="Call">
              <CallIcon />
            </IconButton>
            <IconButton aria-label="Add to favorite">
              <FavoriteIcon />
            </IconButton>
          </box>
        </CardActions>
      </Card>
    </div>
  );
}
