import { Box, Button, Container, Typography } from '@mui/material';

import styles from './hero.module.css';

const Hero = () => {
  // TODO: Add onclick to btn to scroll to calendar booking part

  return (
    <Box className={styles.heroWrapper}>
      <div className={styles.overlay}>
        <Container>
          <Typography variant='h2' color='white' gutterBottom>
            It's time to treat yourself 😎
          </Typography>
          <Typography variant='h5' color='white' paragraph>
            Book a relaxing massage now:
          </Typography>
          <Button variant='contained' color='secondary' size='large'>
            Get Started
          </Button>
        </Container>
      </div>
    </Box>
  );
};

export default Hero;
