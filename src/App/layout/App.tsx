import React from 'react';
import Header from './Header';
import { Container, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <CssBaseline />
   <Header /> 
   <Container>
    <Outlet />
   </Container>
   </>
  );
}

export default App;
