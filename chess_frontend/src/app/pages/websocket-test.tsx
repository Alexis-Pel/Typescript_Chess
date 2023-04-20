import io from 'socket.io-client';
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import axios from 'axios';

const socket = io('http://localhost:3000');

function Websocket() {
  const [chatValue, setchatValue] = useState('');
  const [messagesValue, setMessagesValue] = useState(['']);
  const [userValue, setUserValue] = useState({ username: 'Guest' });
  const token = localStorage.getItem('token');

  // Redirection in no token
  if (token == null) {
    window.location.href = '/';
  }

  if (userValue['username'] == 'Guest') {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios.get('http://localhost:3000/user/me', config).then((r: any) => {
      setUserValue(r['data']['message']);
    });
  }
  function sendchat() {
    socket.emit('message', { username: userValue['username'], message: chatValue });
    setchatValue('');
  }

  function handleChat(event: any) {
    setchatValue(event.target.value);
  }

  // Avoid message repetition
  socket.on('message', (data: any) => {
    if (messagesValue[-1] !== data) {
      setMessagesValue([...messagesValue, data]);
    }
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        width: '50%',
        height: '100%',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <ul style={{ backgroundColor: 'black' }}>
          {messagesValue.map((item, index) => (index === 0 ? null : <div key={index}>{item}</div>))}
        </ul>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          id="outlined-basic"
          label="Message"
          variant="outlined"
          size="small"
          style={{ marginBottom: '1em' }}
          value={chatValue}
          onChange={handleChat}
        />
        <button style={{ height: '3em' }} onClick={sendchat}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Websocket;
