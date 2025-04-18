import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { scrollToSectionById } from '../helpers';

const Nav = () => {
  return (
    <AppBar
      id='nav'
      position='fixed'
      sx={{
        opacity: 0.9,
        backdropFilter: 'blur(8px)',
        height: 64,
      }}>
      <Toolbar>
        <Typography variant='h6' sx={{ flexGrow: 1 }} onClick={() => scrollToSectionById('app')}>
          T.K. Massage
        </Typography>
        <Box display='flex' gap={2}>
          {/* <Select
            value={lang}
            onChange={e => setLang(e.target.value as Lang)}
            variant='outlined'
            size='small'
            sx={{
              color: 'white',
              borderColor: 'white',
              '.MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
              '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
              '.MuiSvgIcon-root': { color: 'white' },
            }}>
            <MenuItem value={Lang.EN}>EN</MenuItem>
            <MenuItem value={Lang.LT}>LT</MenuItem>
          </Select> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
