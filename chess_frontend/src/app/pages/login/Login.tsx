import './Login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { TextField, Button } from '@mui/material';
import Box from '@mui/material/Box';
import chess2 from '../../assets/chess2.png';
import { logIn } from '../../services/login-service';

function Login() {
  const navigate = useNavigate();
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  function handleUsernameChange(event: any) {
    setUsernameValue(event.target.value);
  }
  function handlePasswordChange(event: any) {
    setPasswordValue(event.target.value);
  }

  function handleSubmit() {
    logIn(usernameValue, passwordValue).then((r: any) => {
      if (!r) {
        alert("Nom d'utilisateur ou mot de passe incorrect");
      } else {
        localStorage.setItem('token', r['message']);
        navigate('/dashboard');
      }
    });
  }

  // La fonction handleSubmit récupérera les valeurs saisies dans le formulaire

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '5vh',
      }}
    >
      <Box
        component="img"
        sx={{
          width: '35vh',
          height: '40vh',
          borderRadius: '1vh',
          marginBottom: '5vh',
        }}
        alt="Fantasy chess player"
        src={chess2}
      />
      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        size="small"
        style={{ marginBottom: '1em' }}
        value={usernameValue}
        onChange={handleUsernameChange}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        size="small"
        value={passwordValue}
        onChange={handlePasswordChange}
        type={'password'}
      />
      <Button sx={{ marginTop: '2vh' }} variant="outlined" onClick={handleSubmit}>
        Se connecter
      </Button>
      <Button
        sx={{
          marginTop: '2vh',
        }}
        variant="outlined"
        onClick={() => navigate('/register')}
      >
        Créer un compte
      </Button>
    </Box>
  );
}

export default Login;
