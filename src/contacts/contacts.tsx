import { Box, Button, Toolbar } from '@mui/material';

const Contacts = () => {
  return (
    <Toolbar
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 2,
      }}>
      <Box
        display='flex'
        gap={2}
        sx={{
          width: '100%',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
        }}>
        <Button color='inherit' href='tel:+37066666666'>
          +370 682 50474
        </Button>
        <Button color='inherit' href='mailto:tadas@masazai.lt'>
          t.karalaitis@gmail.com
        </Button>
        <Button
          color='inherit'
          href='https://www.google.com/maps?q=1322+SE+1st+Ave,+Fort+Lauderdale,+33316'
          target='_blank'
          rel='noopener noreferrer'>
          1322 SE 1st Ave, Fort Lauderdale, 33316
        </Button>
      </Box>
    </Toolbar>
  );
};

export default Contacts;
