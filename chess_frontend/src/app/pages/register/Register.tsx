import './Register.css';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/register-service';
import chess3 from '../../assets/chess3.png';

function Register() {
  // Set All States
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordConfirmValue, setPasswordConfirmValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const navigate = useNavigate();
  const validateEmail = (email: string) => {
    // Regular expression to match a valid email format
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    if (emailRegex.test(email) && email.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  function validatePassword(password: string, passwordConfirm: string) {
    if (password !== passwordConfirm || password.length < 8 || passwordConfirm.length < 8) {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }
  }
  function handleUsernameChange(event: any) {
    setUsernameValue(event.target.value);
  }
  function handlePasswordChange(event: any) {
    setPasswordValue(event.target.value);
    validatePassword(event.target.value, passwordConfirmValue);
  }
  function handleEmailChange(event: any) {
    setEmailValue(event.target.value);
    validateEmail(event.target.value);
  }

  function handlePasswordConfirmChange(event: any) {
    setPasswordConfirmValue(event.target.value);
    validatePassword(event.target.value, passwordValue);
  }

  // La fonction handleSubmit récupérera les valeurs saisies dans le formulaire
  function handleSubmit() {
    register(usernameValue, passwordValue, emailValue).then((r) => {
      if (r) {
        navigate('/');
      }
    });
  }

  return (
    <>
      <Box
        sx={{
          margin: '3vh',
        }}
      >
        <Button variant="outlined" onClick={() => navigate('/')}>
          Back to login
        </Button>
      </Box>
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
          src={chess3}
        />
        <TextField
          id="outlined-basic"
          error={!isValid}
          label="Email"
          variant="outlined"
          size="small"
          type={'email'}
          style={{ marginBottom: '1em' }}
          value={emailValue}
          onChange={handleEmailChange}
          helperText={isValid ? '' : 'invalid email'}
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
          error={!isPasswordValid}
          label="Password"
          variant="outlined"
          size="small"
          value={passwordValue}
          onChange={handlePasswordChange}
          type={'password'}
        />
        <TextField
          sx={{
            marginTop: '2vh',
          }}
          id="outlined-basic"
          error={!isPasswordValid}
          label="Confirm Password"
          variant="outlined"
          size="small"
          value={passwordConfirmValue}
          onChange={handlePasswordConfirmChange}
          type={'password'}
        />
        <Button
          sx={{
            marginTop: '2vh',
          }}
          disabled={!(isValid && isPasswordValid)}
          type={'submit'}
          variant="outlined"
          onClick={handleSubmit}
        >
          Créer un compte
        </Button>
      </Box>
    </>
  );
}

export default Register;
