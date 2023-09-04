import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navbar from '../Component/Navbar';
import SideBar from '../Component/SideBar';
import QuizCard from '../Component/Quiz/QuizCard';
import QuizForm from '../Component/Quiz/QuizForm';
import { Typography } from '@mui/material';

const QuizDB = [
  {ques:'question1',option1:'option1', option2:'option2', option3:'option3', option4:'option4', rightAnswer:'option1'},
  
  {ques:'question2',option1:'option A', option2:'option B', option3:'option C', option4:'option D', rightAnswer:'option B'}, 
  
  {ques:'question3',option1:'option a', option2:'option b', option3:'option c', option4:'option d', rightAnswer:'option c'}]

export default function Quiz() {
  return (
    <div>
          <Box sx={{ flexGrow: 1 }} style={{margin:0, padding: 0}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={1}>
          <SideBar />
        </Grid>
        <Grid item xs={11}>
  {/* Article component start         */}

  <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          

        <Box sx={{ flexGrow: 1, mt:10 }}>
        <Typography variant='h3'>QUIZZ</Typography>
      <Grid container spacing={2}>
      {QuizDB.map((quiz, index) => (
  <Grid item xs={12} key={index}>
    <QuizCard prop={quiz} />
  </Grid>
))}
      
       
      </Grid>
    </Box>



        </Grid>
        <Grid item xs={4} style={{position:"fixed", right:"10px"}}>
          <QuizForm  />
        </Grid>
      </Grid>
    </Box>





  {/* Article component end         */}
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}
