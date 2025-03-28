import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { scrollToSectionById } from '../helpers';

const Nav = () => {
  return (
    <AppBar
      id='nav'
      position='fixed'
      sx={{
        opacity: 0.9,
        backdropFilter: 'blur(8px)',
      }}>
      <Toolbar>
        <Typography variant='h6' sx={{ flexGrow: 1 }} onClick={() => scrollToSectionById('app')}>
          Tadas Karalaitis
        </Typography>
        <Box display='flex' gap={2}>
          <Button color='inherit' onClick={() => scrollToSectionById('app')}>
            Home
          </Button>
          <Button color='inherit' onClick={() => scrollToSectionById('about')}>
            About
          </Button>
          <Button color='inherit' onClick={() => scrollToSectionById('book', 15)}>
            Book
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
