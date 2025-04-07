import { Box, Typography, Card, CardContent } from '@mui/material';

const Massage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: 2,
        padding: 4,
        flexWrap: 'wrap',
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },
      }}>
      <Card
        sx={{
          flex: '1 1 calc(33.33% - 16px)',
          minWidth: 100,
          boxShadow: 3,
        }}>
        <CardContent>
          <Typography variant='h6' gutterBottom>
            1 hour - $100
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          flex: '1 1 calc(33.33% - 16px)',
          minWidth: 100,
          boxShadow: 3,
        }}>
        <CardContent>
          <Typography variant='h6' gutterBottom>
            1.5 hour - $150
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          flex: '1 1 calc(33.33% - 16px)',
          minWidth: 100,
          boxShadow: 3,
        }}>
        <CardContent>
          <Typography variant='h6' gutterBottom>
            2 hour - $200
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Massage;
