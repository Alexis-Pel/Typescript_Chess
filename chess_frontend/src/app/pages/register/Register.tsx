import "./Register.css";
import React, {useState} from "react";
import {TextField, Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/register-service";

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

    function validatePassword(password: string, passwordConfirm: string){
        if(password !== passwordConfirm || password.length < 8 || passwordConfirm.length < 8){
            setIsPasswordValid(false);
        }
        else{
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
    function handleSubmit(){
        register(usernameValue, passwordValue, emailValue).then(r => {
            if(r){
                navigate("/");
            }
        })
    }

  return (
      <div className="main-wrapper">
          <div className="login-wrapper">
              <form className="form-wrapper">
                  <div className="inputs">
                      <TextField id="outlined-basic" error={!isValid} label="Email" variant="outlined" size="small" type={"email"} style={{marginBottom: "1em"}} value={emailValue} onChange={handleEmailChange} helperText={isValid? "": "invalid email"} />
                      <TextField id="outlined-basic" label="Username" variant="outlined" size="small" style={{marginBottom: "1em"}} value={usernameValue} onChange={handleUsernameChange}/>
                      <TextField id="outlined-basic" error={!isPasswordValid} label="Password" variant="outlined" size="small" value={passwordValue} onChange={handlePasswordChange} type={"password"}/>
                      <TextField id="outlined-basic" error={!isPasswordValid} label="Confirm Password" variant="outlined" size="small" value={passwordConfirmValue} onChange={handlePasswordConfirmChange} type={"password"}/>
                  </div>
                  <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                      <Button disabled={!(isValid && isPasswordValid)} type={"submit"} variant="outlined" onClick={handleSubmit}>Créer un compte</Button>
                      <i style={{fontSize: "10px"}}>Besoin de <a href="/">Se connecter ?</a></i>
                  </div>
              </form>
          </div>
      </div>
  );
}

export default Register;
