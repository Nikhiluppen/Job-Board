import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: { maxWidth: '450px' },
  boxShadow: 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  paddingTop: '60px',
  paddingBottom: '60px',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  background: 'radial-gradient(ellipse at center, hsl(210,100%,97%), hsl(0,0%,100%))',
  alignItems: 'center',
  justifyContent: 'center',
}));

const HorizontalFormControl = styled(FormControl)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const Label = styled(FormLabel)(({ theme }) => ({
  minWidth: '90px',
  fontWeight: 'bold',
}));

export default function SignUp() {
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (!validateInputs()) return;
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    localStorage.setItem('user', JSON.stringify({ email, password }));
    alert('User registered successfully!');
    window.location.href = '/login';
  };

  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  return (
    <>
      <CssBaseline />
      <SignInContainer direction="column">
        <Card variant="outlined">
          <AccountCircleIcon sx={{ fontSize: 40, alignSelf: 'center', color: 'primary.main' }} />
          <Typography component="h1" variant="h4" textAlign="center" fontWeight="bold">
            Create an Account
          </Typography>
          <Typography textAlign="center" color="text.secondary" fontSize="0.95rem" mb={1}>
            Sign up to explore thousands of jobs tailored for you!
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <HorizontalFormControl>
              <Label htmlFor="email">Email</Label>
              <TextField
                id="email"
                name="email"
                type="email"
                size='small'
                placeholder="you@example.com"
                autoComplete="email"
                required
                fullWidth
                error={emailError}
                helperText={emailErrorMessage}
              />
            </HorizontalFormControl>

            <HorizontalFormControl>
              <Label htmlFor="password">Password</Label>
              <TextField
                id="password"
                name="password"
                type="password"
                size='small'
                placeholder="••••••"
                autoComplete="current-password"
                required
                fullWidth
                error={passwordError}
                helperText={passwordErrorMessage}
              />
            </HorizontalFormControl>

            <FormControlLabel control={<Checkbox value="remember" />} label="Remember me" />
            <Button type="submit" variant="contained" fullWidth sx={{ fontWeight: 'bold' }}>
              Sign Up
            </Button>
          </Box>

          <Divider>or sign up with</Divider>

          

          <Typography textAlign="center" mt={2}>
            Already have an account?{' '}
            <Link href="/login" underline="hover" fontWeight="bold">
              Login here
            </Link>
          </Typography>
        </Card>
      </SignInContainer>
    </>
  );
}
