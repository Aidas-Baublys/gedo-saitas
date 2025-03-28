import { Box, Typography, Card, CardContent } from '@mui/material';

const Massage = () => {
  const massages = [
    { name: 'Swedish Massage', description: 'A relaxing full-body massage.', price: '$50/hour' },
    { name: 'Deep Tissue Massage', description: 'Targets deeper layers of muscles.', price: '$70/hour' },
    { name: 'Hot Stone Massage', description: 'Uses heated stones for relaxation.', price: '$80/hour' },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: 2,
        padding: 4,
        flexWrap: 'wrap',
      }}>
      {massages.map((massage, index) => (
        <Card
          key={index}
          sx={{
            flex: '1 1 calc(33.33% - 16px)',
            minWidth: 100,
            boxShadow: 3,
          }}>
          <CardContent>
            <Typography variant='h6' gutterBottom>
              {massage.name}
            </Typography>
            <Typography variant='body2' paragraph>
              {massage.description}
            </Typography>
            <Typography variant='subtitle1' color='text.secondary'>
              {massage.price}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Massage;
