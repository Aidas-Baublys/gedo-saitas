import { Box, Container, Typography } from '@mui/material';
import tadasImg from '../assets/tadas-about.jpg';

import styles from './about.module.css';

function About() {
  return (
    <Box id='about' sx={{ py: 10, backgroundColor: '#f9f9f9' }}>
      <Container>
        <section className={styles.container}>
          <div className={styles.aboutText}>
            <Typography variant='h3' gutterBottom>
              About Me
            </Typography>
            <Typography variant='body1' paragraph>
              Three years ago, while still working an office job, I discovered my true passion: massage therapy. What
              began as a simple side hustle quickly grew into a calling. After completing a professional course in
              classic body massage in Vilnius, Lithuania, I turned my passion into a full-time career. My techniques are
              rooted in classic relaxing massage, making me the perfect choice if relaxation is what you seek.
            </Typography>
          </div>

          <div className={styles.aboutImage}>
            <Box
              component='img'
              src={tadasImg}
              alt='img of Tadas Karalaitis'
              sx={{
                width: '50%',
                minWidth: 200,
                borderRadius: 4,
                boxShadow: 3,
              }}
            />
          </div>
        </section>
      </Container>
    </Box>
  );
}

export default About;
