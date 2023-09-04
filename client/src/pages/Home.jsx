//Home.js
import React,{useState, useEffect} from 'react'
import SideBar from '../Component/SideBar'
import Navbar from '../Component/Navbar'
import Box from '@mui/material/Box';
import BasicTabs from '../Component/BasicTabs';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material';
import {useDispatch} from 'react-redux';
import {addWiki} from '../actions/wiki.js';

const homePageCards = [{title:'title 1', desc:'this is a desc 1, hello this is a desc 1, and you are seeing desc 1', ratingValue:1, imgSrc:'https://thecinemaholic.com/wp-content/uploads/2021/01/nezuu-e1638963260523.jpg', tag:'Most Popular'}, 

{title:'title 2', desc:'this is a desc 2, hello this is a desc 2, and you are seeing desc 2', ratingValue:1, imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStSXLrKsJugYcpiBIKP3pR2jFLhV5v6pD5Kw&usqp=CAU' , tag:'Most Popular'}, 

{title:'title 3', desc:'this is a desc 1, hello this is a desc 1, and you are seeing desc 1', ratingValue:1, imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU77nomXUNM9H39AH4OxAEiK2uE7yF_qip8w&usqp=CAU', tag:'Most Popular'}, 

{title:'title ', desc:'this is a desc 1, hello this is a desc 1, and you are seeing desc 1', ratingValue:1, imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSklheKlyY5lJ_s2sJpFLTMemrhhNMPnGbdyw&usqp=CAU', tag:'Newest'}, 

{title:'title ', desc:'this is a desc 1, hello this is a desc 1, and you are seeing desc 1', ratingValue:1, imgSrc:'https://thecinemaholic.com/wp-content/uploads/2021/01/nezuu-e1638963260523.jpg', tag:'Newest'}, 

{title:'title ', desc:'this is a desc 1, hello this is a desc 1, and you are seeing desc 1', ratingValue:1, imgSrc:'https://thecinemaholic.com/wp-content/uploads/2021/01/nezuu-e1638963260523.jpg', tag:'Newest'}, 

{title:'title ', desc:'this is a desc 1, hello this is a desc 1, and you are seeing desc 1', ratingValue:1, imgSrc:'https://thecinemaholic.com/wp-content/uploads/2021/01/nezuu-e1638963260523.jpg', tag:'Newest'}, 

{title:'title ', desc:'this is a desc 1, hello this is a desc 1, and you are seeing desc 1', ratingValue:1, imgSrc:'https://thecinemaholic.com/wp-content/uploads/2021/01/nezuu-e1638963260523.jpg', tag:'Highest rating'}, 

{title:'title ', desc:'this is a desc 1, hello this is a desc 1, and you are seeing desc 1', ratingValue:1, imgSrc:'https://thecinemaholic.com/wp-content/uploads/2021/01/nezuu-e1638963260523.jpg', tag:'Highest rating'}, 

{title:'title ', desc:'this is a desc 1, hello this is a desc 1, and you are seeing desc 1', ratingValue:1, imgSrc:'https://thecinemaholic.com/wp-content/uploads/2021/01/nezuu-e1638963260523.jpg', tag:'Highest rating'}, 

{title:'title ', desc:'this is a desc 1, hello this is a desc 1, and you are seeing desc 1', ratingValue:1, imgSrc:'https://thecinemaholic.com/wp-content/uploads/2021/01/nezuu-e1638963260523.jpg', tag:'Highest rating'}, ]


export default function Home() {
  const [addWikiData, setAddWikiData] = useState({animeName:'', posterLink:'', summary:'', rating:'', status:''})

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addWiki(addWikiData));
  };
  return (
    <Box sx={{ flexGrow: 1 }} style={{margin:0, padding: 0}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={1}>
          <SideBar />
        </Grid>
        <Grid item xs={11}>
        <Container maxWidth="lg" style={{marginTop:'70px'}}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="#2074d4"
              gutterBottom
            >
              <strong>Otaku Central</strong>
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>

          </Container>
          <BasicTabs />
          <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Add Wiki
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="animeName"
                  label="animeName"
                  name="animeName"
                  value={addWikiData.animeName}
                  onChange={(e)=> setAddWikiData({...addWikiData, animeName: e.target.value})}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="posterLink"
                  label="posterLink"
                  type="posterLink"
                  id="posterLink"
                  value={addWikiData.posterLink}
                  onChange={(e)=> setAddWikiData({...addWikiData, posterLink: e.target.value})}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={4}
                  name="summary"
                  label="summary"
                  type="summary"
                  id="summary"
                  value={addWikiData.summary}
                  onChange={(e)=> setAddWikiData({...addWikiData, summary: e.target.value})}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="status"
                  required
                  fullWidth
                  id="status"
                  label="status"
                  value={addWikiData.status}
                  onChange={(e)=> setAddWikiData({...addWikiData,stat : e.target.value})}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="rating"
                  label="rating"
                  name="rating"
                  value={addWikiData.rating}
                  onChange={(e)=> setAddWikiData({...addWikiData, rating: e.target.value})}
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Wiki
            </Button>
          
          </Box>
        </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

