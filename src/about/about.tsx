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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae purus nec leo volutpat egestas.
              In ac urna vel neque ullamcorper gravida. Nulla facilisi.
            </Typography>
            <Typography variant='body1' paragraph>
              Our mission is to help you relax, recharge, and feel your best with professional, high-quality massage
              services in a calm, welcoming environment.
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
