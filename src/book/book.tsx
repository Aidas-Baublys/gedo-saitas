import { useState } from 'react';
import { LocalizationProvider, DatePicker, TimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { Box, Button, Typography } from '@mui/material';

function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  // TODO: Send time to google calendar
  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      alert(`Booking confirmed for ${selectedDate.toLocaleDateString()} at ${selectedTime.toLocaleTimeString()}`);
    } else {
      alert('Please select both date and time!');
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: 300, margin: '0 auto', mt: 5 }}>
        <Typography variant='h5'>Book Your Massage</Typography>
        <DatePicker
          label='Select a date'
          value={selectedDate}
          onChange={newDate => setSelectedDate(newDate)}
          slotProps={{ textField: { label: 'Select a date' } }}
        />
        <TimePicker
          label='Select a time'
          value={selectedTime}
          onChange={newTime => setSelectedTime(newTime)}
          slotProps={{ textField: { label: 'Select a time' } }}
        />
        <Button variant='contained' onClick={handleBooking}>
          Confirm Booking
        </Button>
      </Box>
    </LocalizationProvider>
  );
}

export default BookingCalendar;
