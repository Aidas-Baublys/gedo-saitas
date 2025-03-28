import { Box, Button, Toolbar } from '@mui/material';

const Contacts = () => {
  return (
    <Toolbar>
      <Box display='flex' gap={2} sx={{ width: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
        <Button color='inherit' href='tel:+37066666666'>
          +370 666 66 666
        </Button>
        <Button color='inherit' href='mailto:tadas@masazai.lt'>
          tadas@masazai.lt
        </Button>
        <Button
          color='inherit'
          href='https://www.google.com/maps?q=Konstitucijos+pr.+12,+Vilnius,+09309'
          target='_blank'
          rel='noopener noreferrer'>
          Konstitucijos pr. 12, Vilnius
        </Button>
      </Box>
    </Toolbar>
  );
};

export default Contacts;
