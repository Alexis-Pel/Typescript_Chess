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
      <div className="main-wrapper">
        <div className="login-wrapper">
          <form className="form-wrapper">
            <div className="inputs">
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
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Button sx={{ marginTop: '2vh' }} variant="outlined" onClick={handleSubmit}>
                Se connecter
              </Button>
              <i style={{ fontSize: '10px', marginTop: '3vh' }}>
                Besoin de <a href="/register">créer un compte ?</a>
              </i>
            </div>
          </form>
        </div>
      </div>
    </Box>
  );
}

export default Login;
