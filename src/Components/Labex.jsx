import React, { useState } from 'react';
import { TextField, Button, Container, Paper, Typography, Box } from '@mui/material';
import ResponsiveAppBar from './AppBar1'; // Assuming you have this component imported
import './Style.css';

export default function BootstrapForm() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);

    if (emailValue && !emailValue.includes('@')) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <ResponsiveAppBar />
      
      <Paper elevation={3} style={{ padding: 20, marginTop: 50 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login Page
        </Typography>
        <Box component="form" display="flex" flexDirection="column" gap={2}>
          <TextField label="Name" variant="outlined" fullWidth />
          
          {/* Email input with validation and no blue outline */}
          <TextField
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            helperText={emailError ? "Please include the '@' symbol in the email" : ""}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'transparent',
                }
              }
            }}
          />
          
          <TextField label="Password" type="password" variant="outlined" fullWidth />
          
          <Button variant="contained" color="success" fullWidth>
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}