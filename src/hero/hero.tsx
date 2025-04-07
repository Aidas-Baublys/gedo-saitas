import { Box, Container, Typography } from '@mui/material';
import { useLang } from '../langContext/langContext';

import styles from './hero.module.css';

const Hero = () => {
  const { t } = useLang();

  return (
    <Box className={styles.heroWrapper}>
      <div className={styles.overlay}>
        <Container>
          <Typography variant='h2' color='white' gutterBottom>
            {t('heroTitle')}
          </Typography>
          <Typography variant='h5' color='white' paragraph>
            {t('findTimes')}
          </Typography>
        </Container>
      </div>
    </Box>
  );
};

export default Hero;
