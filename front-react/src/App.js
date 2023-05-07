import logo from './logo.svg';
import './App.css';
import React from 'react'
import {Input} from './components/Input.js';
import TextField from '@mui/material/TextField';
import { sizing } from '@mui/system';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { useState } from 'react';
const theme = createTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    htmlFontSize: 60,
  },
});

function App() {
  const [message, setMessage] = useState('');

  const [updated, setUpdated] = useState(message);

const handleChange = (event) => {
  setMessage(event.target.value);
};

const handleClick = () => {
  // 👇 "message" stores input field value
  setUpdated(message);
};

  return (
    <div className="App">
      <h1 id='hello'>Message: {message}</h1>
      <div>
      <TextField 
        name="message" justifyContent= "center" className="Myt" id="outlined-basic" label="رشته مورد نظر" sx={{
        width: 500,
        maxWidth: '100%',
      }} onChange={handleChange}
      value={message} variant="outlined" />
      </div>
      
      <Button onClick={handleClick} size='500' variant="contained">Contained</Button>
      
    </div>
  );
}

export default App;
