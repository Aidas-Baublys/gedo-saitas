import { useState } from 'react';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { Box, Container, Typography, Button, Grid2 } from '@mui/material';
import { addDays, format } from 'date-fns';

const mockBookedTimes = {
  '2025-03-30': ['10:00', '11:00'],
};

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setSelectedTime('');
    if (date) {
      const dateStr = format(date, 'yyyy-MM-dd');

      const allTimes = ['10:00', '11:00', '12:00', '13:00', '14:00'];
      // TODO: Get available from google calendar
      // @ts-ignore
      const booked = mockBookedTimes[dateStr] || [];
      const freeTimes = allTimes.filter(time => !booked.includes(time));
      setAvailableTimes(freeTimes);
    } else {
      setAvailableTimes([]);
    }
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      alert(`Booking confirmed for ${selectedDate.toLocaleDateString()} at ${selectedTime}`);
    } else {
      alert('Please select a date and time!');
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container sx={{ mt: 5 }}>
        <Typography variant='h4' gutterBottom>
          Book a Massage
        </Typography>
        <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          <StaticDatePicker
            displayStaticWrapperAs='desktop'
            value={selectedDate}
            onChange={handleDateChange}
            minDate={new Date()}
            maxDate={addDays(new Date(), 30)}
          />

          <Box sx={{ flex: 1 }}>
            <Typography variant='h6' gutterBottom>
              Select a time
            </Typography>
            <Grid2 container spacing={2}>
              {availableTimes.length > 0 ? (
                availableTimes.map(time => (
                  <Grid2 key={time}>
                    <Button
                      fullWidth
                      variant={selectedTime === time ? 'contained' : 'outlined'}
                      onClick={() => setSelectedTime(time)}>
                      {time}
                    </Button>
                  </Grid2>
                ))
              ) : (
                <Typography>No available times for this date.</Typography>
              )}
            </Grid2>
            <Button
              variant='contained'
              color='primary'
              sx={{ mt: 3 }}
              disabled={!selectedDate || !selectedTime}
              onClick={handleBooking}>
              Confirm Booking
            </Button>
          </Box>
        </Box>
      </Container>
    </LocalizationProvider>
  );
}
