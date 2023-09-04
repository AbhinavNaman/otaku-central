import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import {  } from "../actions/articles";

export default function ArticleCard({prop}) {

  const Navigate = useNavigate();

  const handleOpenArticle = () => {
    // setCurrentId(prop._id);
    Navigate(`/article/${prop?._id}`);
  };


  return (
    <Card sx={{ maxWidth: 445 }} elevation={4} style={{borderRadius:"10px"}}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: 'red' }}
            aria-label="recipe"
            style={{ zIndex: 1 }}
          >
            A
          </Avatar>
        }
        title={prop.title}
        subheader={prop.date}
      />

      
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {prop.fiction.slice(0,100)}<span style={{color:'blue'}}>...read more</span>
          </Typography>
        </CardContent>
     
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon style={{ zIndex: 1 }} />
        </IconButton> */}
        <Button size="small" onClick={handleOpenArticle}>View </Button>
        
      </CardActions>
    </Card>
  );
}
