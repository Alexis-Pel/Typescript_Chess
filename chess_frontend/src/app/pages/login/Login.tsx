import "./Login.css";
import React from "react";
import {TextField, Button} from "@mui/material";

function Login() {
  return (
      <div className="main-wrapper">
          <div className="login-wrapper">
              <form className="form-wrapper">
                  <div className="inputs">
                      <TextField id="outlined-basic" label="Email" variant="outlined" size="small" style={{marginBottom: "1em"}} />
                      <TextField id="outlined-basic" label="Password" variant="outlined" size="small" />
                  </div>
                  <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                      <Button variant="outlined">Se connecter</Button>
                      <i style={{fontSize: "10px"}}>Besoin de <a href="#">créer un compte ?</a></i>
                  </div>
              </form>
          </div>
      </div>
  );
}

export default Login;
