import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const defaultTheme = createTheme();


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('liantsiky@gmail.com');
  const [password, setPassword] = useState('liantsiky');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    console.log('Email:', email);
    console.log('Password:', password);
  
    try {
      const response = await fetch('https://autotrader-production-a56f.up.railway.app/api/auth/login', {
        
        method: 'POST', // Utilisez la méthode POST
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      if (response.ok) {
        
        const responseData = await response.json();
        const userToken = responseData.accessToken;

        console.log(responseData);
  
        console.log(userToken);
        // Stockez le token dans le localStorage
        localStorage.setItem('token', userToken);
  
        // Redirigez l'utilisateur vers la page d'accueil ou faites autre chose
        navigate('/Acceuille');
  
      } else {
        console.error('Erreur d\'authentification');
      }
    } catch (error) {
      console.error('Erreur lors de la requête:', error);
    }
  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              // label="Email Address"
              name="email"
              autoComplete="email"
              value={'liantsiky@gmail.com'}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              // label="Password"
              value={'liantsiky'}
              type="password"
              id="password"
              autoComplete="current-password"
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
              <Grid item xs>
                <Link href="/" variant="body2">
                  annuler
                </Link>
              </Grid>
              <Grid item>
                <Link href="/Inscription" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;