import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

const Nav = () => {
  // TODO: When the spa is done, add scroll to section functionality for clicking on the nav buttons

  return (
    <AppBar position='fixed'>
      <Toolbar>
        <Typography variant='h6' sx={{ flexGrow: 1 }}>
          Tadas Karalaitis
        </Typography>
        <Box display='flex' gap={2}>
          <Button color='inherit'>Home</Button>
          <Button color='inherit'>About</Button>
          <Button color='inherit'>Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
