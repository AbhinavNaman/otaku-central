import React,{useState} from "react";
import { Button, CssBaseline, TextField, Grid, Box, Typography, Container } from "@mui/material";
import {useDispatch} from 'react-redux'
// import {createQuiz} from './actions/quiz';



export default function QuizForm() {

  const dispatch = useDispatch()
  const [quizFormData, setQuizFormData] = useState({ques:'', option1:'',option2:'',option3:'',option4:'',answer:''});

  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(createQuiz(quizFormData));
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mt: 4 }}>
            Create a Quizzzz
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>

              <Grid item xs={12} sm={12}>
                <TextField
                  id="outlined-multiline-static"
                  label="Question *"
                  multiline
                  fullWidth
                  rows={4}
                  autoFocus
                  value={quizFormData.ques}
                  onChange={(e)=> setQuizFormData({...quizFormData, ques: e.target.value})}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                //   autoComplete="given-name"
                  name="option1"
                  required
                  fullWidth
                  id="option1"
                  label="option1"
                  value={quizFormData.option1}
                  onChange={(e)=> setQuizFormData({...quizFormData, option1: e.target.value})}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="option2"
                  label="option2"
                  name="option2"
                  value={quizFormData.option2}
                  onChange={(e)=> setQuizFormData({...quizFormData, option2: e.target.value})}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="option3"
                  label="option3"
                  name="option3"
                  value={quizFormData.option3}
                  onChange={(e)=> setQuizFormData({...quizFormData, option3: e.target.value})}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="option4"
                  label="option4"
                  name="option4"
                  value={quizFormData.option4}
                  onChange={(e)=> setQuizFormData({...quizFormData, option4: e.target.value})}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="answer"
                  label="answer"
                  name="answer"
                  value={quizFormData.answer}
                  onChange={(e)=> setQuizFormData({...quizFormData, answer: e.target.value})}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Post Quiz
            </Button>
          </Box>
        </Box>
      </Container>
  );
}
