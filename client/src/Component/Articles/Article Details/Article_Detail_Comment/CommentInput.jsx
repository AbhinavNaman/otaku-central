import React, {useState, useEffect} from 'react';
import {Button, CssBaseline, TextField, Box, Container }from '@mui/material';
import {useDispatch} from 'react-redux';
// import {createComment} from './actions/quiz';

export default function CommentInput() {
  const dispatch = useDispatch()

  const [commentInputFormData, setCommentInputFormData] = useState({username:'', comment:''})

  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(createComment(commentInputFormData));
  };

  return (

      <Container component="main" maxWidth="xs" style={{position:"fixed",bottom:0,backgroundColor:"white"}}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          style={{ }}
        >
        
          
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
 
              <TextField
          id="outlined-multiline-static"
          label="fiction *"
          multiline
          fullWidth
          rows={3}
          value={commentInputFormData.name}
                  onChange={(e)=> setCommentInputFormData({...commentInputFormData, comment: e.target.value})}
        />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             comment
            </Button>
          </Box>
        </Box>
      </Container>

  );
}