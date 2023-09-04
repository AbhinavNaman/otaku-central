import React, {useState} from 'react';
import {Button, CssBaseline, TextField, Grid, Box, Typography, Container, } from '@mui/material';
import {useDispatch} from 'react-redux';
// import {addArticle} from './actions/quiz';

export default function ArticleForm() {
  const dispatch = useDispatch()

  const [articleFormData, setArticleFormData] = useState({name:'', title:'',fiction:'',season:'',ep:''});

  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(addArticle(articleFormData));
  };

  return (

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        
          <Typography component="h1" variant="h5" sx={{mt:4}}>
            Write Fan Fiction
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="animeName"
                  required
                  fullWidth
                  id="animeName"
                  label="Anime Name"
                  autoFocus
                  value={articleFormData.name}
                  onChange={(e)=> setArticleFormData({...articleFormData, name: e.target.value})}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  name="title"
                  autoComplete="family-name"
                  value={articleFormData.title}
                  onChange={(e)=> setArticleFormData({...articleFormData, title: e.target.value})}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
              <TextField
          id="outlined-multiline-static"
          label="fiction *"
          multiline
          fullWidth
          rows={8}
          value={articleFormData.fiction}
                  onChange={(e)=> setArticleFormData({...articleFormData, fiction: e.target.value})}
        />
              </Grid>
              <Grid item xs={6}>
      <TextField
          id="outlined-multiline-static"
          label="season"
          value={articleFormData.season}
                  onChange={(e)=> setArticleFormData({...articleFormData, season: e.target.value})}
        />
              </Grid>
              <Grid item xs={6}>
             
      <TextField
          id="outlined-multiline-static"
          label="episode"
          value={articleFormData.ep}
                  onChange={(e)=> setArticleFormData({...articleFormData, ep: e.target.value})}
        />
              </Grid>
            
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Post
            </Button>
           
          </Box>
        </Box>

      </Container>
  );
}