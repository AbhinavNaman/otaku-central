import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Comment from './Comment';
import CommentInput from "./CommentInput"
import Typography from '@mui/material/Typography';
import comments from './commentsData.js'


export default function ArticleDetailCommentSection() {
  const customCss = {
    scrollbarWidth:'thin',
    height: '420px',
    width: "600px",
    overflowY: 'scroll',
  }

  return (
    <div style={{marginTop:"60px", marginRight:"10px"}}>
    <Typography component="h1" variant="h5" sx={{mt:4}}>
            comments
          </Typography>
    <List sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }} style={customCss}>

    {comments.map((comment, index) =>{
      return (
      <div key={index}>
      <Comment prop={comment}/>
      <Divider variant="inset" component="li" />
      </div>
      )
    })}

    </List>
    <CommentInput/>
    </div>
  );
}