import React, {useState, useEffect} from 'react';
import {Radio, Box,  RadioGroup, FormControlLabel, FormControl, FormHelperText, FormLabel, Button, Card } from '@mui/material';

export default function QuizCard({prop}) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('Choose wisely');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === prop.rightAnswer) {
      setHelperText('You got it!');
      setError(false);
    } else {
      setHelperText('Please select the right option.');
      setError(true);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, mt: 2 }}  elevation={6}>
        <Card sx={{ maxWidth: 945 }} elevation={8} style={{borderRadius:"20px"}}>
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <FormLabel id="demo-error-radios">{prop?.ques}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value={prop?.option1} control={<Radio />} label={prop?.option1} />

          <FormControlLabel value={prop?.option2} control={<Radio />} label={prop?.option2} />

          <FormControlLabel value={prop?.option3} control={<Radio />} label={prop?.option3} />

          <FormControlLabel value={prop?.option4} control={<Radio />} label={prop?.option4} />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>
      </FormControl>
    </form>
    </Card>
    </Box>
  );
}
