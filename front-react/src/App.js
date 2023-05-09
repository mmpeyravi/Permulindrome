import logo from './check.gif';
import './App.css';
import React from 'react'
import { Input } from './components/Input.js';
import TextField from '@mui/material/TextField';
import { sizing } from '@mui/system';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { useState } from 'react';
import useWebSocket from 'react-use-websocket';
import { w3cwebsocket as W3CWebSocket } from "websocket";
const theme = createTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    htmlFontSize: 60,
  },
});
const client = new W3CWebSocket('ws://localhost:8080');

let payam='';
let condi='2';

function App() {

  const [message, setMessage] = useState('');
  const [updated, setUpdated] = useState(message);

  const [payam, setPayam] = useState('');
  const [condi, setCondi] = useState('');

  client.onopen = () => {
    console.log('WebSocket Client Connected');
  };
  client.onmessage = (serverData) => {
    setPayam(serverData.data);
    if (serverData.data==='true') {
      setCondi('0');
    }else{
      setCondi('1');
    }
    //payam=serverData.data;
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
    setCondi('2')
    //client.send(event.target.value);
  };

  const handleClick = () => {
    // 👇 "message" stores input field value
    setUpdated(message);
    client.send(message);
  };
//const x=document.getElementById('logo').set
  return (
    <div className="App">
      <h1 id='hello'>Message: {payam}</h1>
      <TextField name="message" className="Myt" id="outlined-basic" label="your string" sx={{
            width: 500,
            maxWidth: '100%',
          }} onChange={handleChange}
          value={message} variant="outlined" />
      <Button onClick={handleClick} variant="contained">Go!</Button>
      <br/>
      <br/>
      {condi==='0' ? (
        <img src={require('./check.gif')} width={150} height={150} alt="loading..." />
      ) :condi==='1'?(
        <img src={require('./cross.gif')} width={150} height={150} alt="loading..." />
      ):(
        <div></div>
      )}
      {/* <div visibility='hidden'>
        <img visibility='hidden' src={logo} width={150} height={150} alt="loading..." />
      </div> */}
      
    </div>
  );
}

export default App;
