import { Button, Container, Typography } from '@mui/material';

function App() {
  return (
    <section>
      <Container>
        <Typography variant='h4' gutterBottom>
          Hello, MUI!
        </Typography>
        <Button variant='contained' color='primary'>
          Click me
        </Button>
      </Container>
    </section>
  );
}

export default App;
