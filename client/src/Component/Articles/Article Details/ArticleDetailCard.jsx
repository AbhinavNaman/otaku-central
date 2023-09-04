import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Button,
  Rating
} from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ArticleDetailCard({prop}) {
  return (
    <div>
      <Box sx={{ flexGrow: 1, mt: 2 }}  elevation={6}>
        <Card sx={{ maxWidth: 945 }} elevation={8} style={{borderRadius:"20px"}}>
          <CardHeader
            avatar={
              <Avatar
                sx={{ bgcolor: red[500] }}
                aria-label="recipe"
                style={{ zIndex: 1 }}
              >
                R
              </Avatar>
            }
            title={prop?.title}
            subheader={prop?.date}
          />

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {prop?.fiction}
            </Typography>
            #{prop?.tag}
          </CardContent>
          <CardActions disableSpacing>
            <Rating name="customized-10" defaultValue={prop?.ratingValue} max={10} />
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}
