import { AppBar, Box, Button, MenuItem, Select, Toolbar, Typography } from '@mui/material';
import { scrollToSectionById } from '../helpers';
import { Lang, useLang } from '../langContext/langContext';

const Nav = () => {
  const { lang, setLang, t } = useLang();

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
            {t('home')}
          </Button>
          <Button color='inherit' onClick={() => scrollToSectionById('about')}>
            {t('about')}
          </Button>
          <Button color='inherit' onClick={() => scrollToSectionById('book', 15)}>
            {t('book')}
          </Button>
          <Select
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
          </Select>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
