import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import agent from '../../App/api/agent';
import {  LoginData } from '../../App/models/login';
import LoginService from '../../App/api/LoginService';



const theme = createTheme();

export default function Login() {
const intitialLoginState = {
  username: '',
  password: ''
};
   const [values, setValues] = useState({
        username: '',
        password: ''
   });
  const [login, setLogin] = useState<LoginData>(intitialLoginState);
  const handleSubmit = (event: any) => {
    event.preventDefault();
   // console.log(values);
   // agent.Account.login(values);
 //  console.log(login);
  // agent.Account.login(login);
  var data = {
    username: login.username,
    password: login.password
  };
  LoginService.create(data)
      .then((response: any) => {
        setLogin({
          username: response.data.username,
          password: response.data.password
        });
       // setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  

  function handleInputChange(event: any) {
    const {name, value} = event.target;
   // setValues({...values, [name]: value});
   setLogin({ ...login, [name]: value });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component={Paper} maxWidth="sm" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center',p: 4}}>
      
        
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              label="Username"
              name="username"
              autoFocus
              onChange={handleInputChange}
              value ={login.username}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              onChange={handleInputChange}
              value ={login.password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to='/register'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
     
      </Container>
    </ThemeProvider>
  );
}