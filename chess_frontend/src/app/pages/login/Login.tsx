import './Login.css';
import React, { useState } from 'react';
import {
  TextField,
  Button,
  Alert,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { logIn } from '../../services/login-service';

function Login() {
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [emailRecoverValue, setemailRecoverValue] = useState('');
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  function handleClose() {
    setOpen(false);
  }
  function handleCloseSend() {
    setOpen(false);
    // Send Email
  }
  function handleUsernameChange(event: any) {
    setUsernameValue(event.target.value);
  }
  function handlePasswordChange(event: any) {
    setPasswordValue(event.target.value);
  }
  function handleEmailRecoverChange(event: any) {
    setemailRecoverValue(event.target.value);
  }

  function handleSubmit() {
    logIn(usernameValue, passwordValue).then((r) => {
      if (!r) {
        alert("Nom d'utilisateur ou mot de passe incorrect");
      } else {
        // Go To Dashboard
      }
    });
  }

  // La fonction handleSubmit récupérera les valeurs saisies dans le formulaire

  return (
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
            <i style={{ fontSize: '10px' }}>
              <a href={'#'} onClick={handleClickOpen}>
                Mot de passe oublié ?
              </a>
            </i>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Reintitialisation du mot de passe</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Veuillez indiquer votre adresse e-mail pour recevoir un mail de changement de mot
                  de passe
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="standard"
                  value={emailRecoverValue}
                  onChange={handleEmailRecoverChange}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleCloseSend}>Send</Button>
              </DialogActions>
            </Dialog>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Button variant="outlined" onClick={handleSubmit}>
              Se connecter
            </Button>

            <i style={{ fontSize: '10px' }}>
              Besoin de <a href="/register">créer un compte ?</a>
            </i>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
