import { useState } from 'react';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { Box, Container, Typography, Button, Grid2, TextField } from '@mui/material';
import { addDays } from 'date-fns';
import { useLang } from '../langContext/langContext';
import { enUS, lt } from 'date-fns/locale';
import Turnstile from 'react-turnstile';

const SITE_KEY = '0x4AAAAAABEh7PeL0jeD85vO';

function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const { t, lang } = useLang();

  const availableTimes = ['10:00', '11:00', '12:00', '13:00', '14:00'];
  const locale = lang === 'lt' ? lt : enUS;

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime || !email || !captchaToken) {
      alert('Please complete all fields and CAPTCHA!');
      return;
    }

    const payload = {
      date: selectedDate.toISOString().split('T')[0],
      time: selectedTime,
      email,
      turnstile_token: captchaToken,
    };

    try {
      const res = await fetch('https://your-project.functions.supabase.co/submitBooking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert(`Booking confirmed for ${payload.date} at ${payload.time}. Confirmation sent to ${email}.`);
        setSelectedDate(null);
        setSelectedTime('');
        setEmail('');
        setCaptchaToken(null);
      } else {
        const error = await res.json();
        alert(`Error: ${error.message || 'Something went wrong.'}`);
      }
    } catch (err) {
      alert('Network error. Please try again later.');
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={locale}>
      <Container id='book' sx={{ mt: 5 }}>
        <Typography variant='h4' gutterBottom>
          {t('book')}
        </Typography>
        <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          <StaticDatePicker
            displayStaticWrapperAs='desktop'
            value={selectedDate}
            onChange={setSelectedDate}
            minDate={new Date()}
            maxDate={addDays(new Date(), 30)}
          />

          <Box sx={{ flex: 1 }}>
            <Typography variant='h6' gutterBottom>
              {t('selectTimes')}
            </Typography>
            <Grid2 container spacing={2}>
              {availableTimes.map(time => (
                <Grid2 key={time}>
                  <Button
                    fullWidth
                    variant={selectedTime === time ? 'contained' : 'outlined'}
                    onClick={() => setSelectedTime(time)}>
                    {time}
                  </Button>
                </Grid2>
              ))}
            </Grid2>

            <TextField
              label='Email'
              type='email'
              fullWidth
              value={email}
              onChange={e => setEmail(e.target.value)}
              sx={{ mt: 3 }}
            />

            {/* Turnstile CAPTCHA */}
            <Box sx={{ mt: 3 }}>
              <Turnstile
                sitekey={SITE_KEY}
                onSuccess={token => setCaptchaToken(token)}
                onExpire={() => setCaptchaToken(null)}
              />
            </Box>

            <Button
              variant='contained'
              color='primary'
              sx={{ mt: 3 }}
              disabled={!selectedDate || !selectedTime || !email || !captchaToken}
              onClick={handleBooking}>
              {t('confirmBooking')}
            </Button>
          </Box>
        </Box>
      </Container>
    </LocalizationProvider>
  );
}

export default BookingCalendar;
