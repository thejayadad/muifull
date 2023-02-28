import React from 'react'
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { Toolbar, styled } from '@mui/material';

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent: "space-between"
})

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">

        <StyledToolbar>
            Navbar
        </StyledToolbar>


</Container>
    </AppBar>
  )
}

export default Navbar