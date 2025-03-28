import { Box, Button, Container, Typography } from '@mui/material';
import { scrollToSectionById } from '../helpers';

import styles from './hero.module.css';

const Hero = () => {
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
          <Button variant='contained' color='secondary' size='large' onClick={() => scrollToSectionById('book', 15)}>
            Get Started
          </Button>
        </Container>
      </div>
    </Box>
  );
};

export default Hero;
