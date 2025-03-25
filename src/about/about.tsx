import { Box, Container, Typography, Button, Grid2 } from '@mui/material';

function About() {
  return (
    <Box sx={{ py: 10, backgroundColor: '#f9f9f9' }}>
      <Container>
        <Grid2 container spacing={6} alignItems='center'>
          <Grid2 size={6}>
            <Typography variant='h3' gutterBottom>
              About Me
            </Typography>
            <Typography variant='body1' paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae purus nec leo volutpat egestas.
              In ac urna vel neque ullamcorper gravida. Nulla facilisi.
            </Typography>
            <Typography variant='body1' paragraph>
              Our mission is to help you relax, recharge, and feel your best with professional, high-quality massage
              services in a calm, welcoming environment.
            </Typography>
            <Button variant='contained' size='large'>
              Learn More
            </Button>
          </Grid2>

          <Grid2 size={6}>
            <Box
              component='img'
              src='src\assets\tadas-about.jpg'
              alt='img of Tadas Karalaitis'
              sx={{
                width: '50%',
                borderRadius: 4,
                boxShadow: 3,
              }}
            />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}

export default About;
