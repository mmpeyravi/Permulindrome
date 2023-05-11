import './App.css';
import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
const theme = createTheme({
  typography: {
    htmlFontSize: 60,
  },
});
const client = new W3CWebSocket('ws://localhost:8080');

let payam='';
let condi='2';

function App() {

  const [message, setMessage] = useState('');
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
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
    setCondi('2')
  };

  const handleClick = () => {
    // 👇 "message" stores input field value
    setUpdated(message);
    client.send(message);
  };

  return (
    <div className="App">
      <br/>
      <br/>
      <div>
      <img src={require('././permu_prev_ui.png')} width={1000} height={450}/>
      </div>
      <TextField name="message" className="Myt" id="outlined-basic" label="your string" sx={{
            width: 500,
            maxWidth: '100%',
          }} onChange={handleChange}
          value={message} variant="outlined" />
      <br/>
      <Button onClick={handleClick} variant="contained">Go!</Button>
      <br/>
      <br/>
      {condi==='0' ? (
        <img src={require('./check2.gif')} width={150} height={150} />
      ) :condi==='1'?(
        <img src={require('./cross2.gif')} width={150} height={150} />
      ):(
        <div></div>
      )}
    </div>
  );
}

export default App;
