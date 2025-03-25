import { Box, Button, Toolbar } from '@mui/material';

const Contacts = () => {
  return (
    <Toolbar>
      <Box display='flex' gap={2} sx={{ width: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
        <Button color='inherit'>+370 666 66 666</Button>
        <Button color='inherit'>tadas@masazai.lt</Button>
        <Button color='inherit'>Super g. 69, Vilnius</Button>
      </Box>
    </Toolbar>
  );
};

export default Contacts;
