import { useState, useEffect } from 'react';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { Box, Container, Typography, Button, Grid2, TextField } from '@mui/material';
import { addDays, format } from 'date-fns';
import { gapi } from 'gapi-script';
import { Lang, useLang } from '../langContext/langContext';
import { enUS, lt } from 'date-fns/locale';

const CLIENT_ID = '256298249777-jp9h31rs37o445lf8ddoscnr6mm98g7v.apps.googleusercontent.com';
const API_KEY = 'asdasd';
const CALENDAR_ID = 'primary';
const SCOPES = 'https://www.googleapis.com/auth/calendar.events';

function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [email, setEmail] = useState<string>('');
  const { t, lang } = useLang();

  useEffect(() => {
    const initClient = () => {
      gapi.load('client:auth2', () => {
        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
          scope: SCOPES,
        });
      });
    };
    initClient();
  }, []);

  const fetchAvailableTimes = async (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    const startOfDay = new Date(dateStr + 'T00:00:00Z').toISOString();
    console.log('🚀 ~ fetchAvailableTimes ~ startOfDay:', startOfDay);
    const endOfDay = new Date(dateStr + 'T23:59:59Z').toISOString();
    console.log('🚀 ~ fetchAvailableTimes ~ endOfDay:', endOfDay);

    try {
      const response = await gapi.client.calendar.events.list({
        calendarId: CALENDAR_ID,
        // timeMin: startOfDay,
        // timeMax: endOfDay,
        singleEvents: true,
        orderBy: 'startTime',
      });

      console.log('🚀 ~ fetchAvailableTimes ~ response:', response);

      const events = response.result.items || [];
      console.log('🚀 ~ fetchAvailableTimes ~ events:', events);
      // @ts-ignore
      const bookedTimes = events.map(event => {
        const startTime = event.start?.dateTime || event.start?.date;
        return format(new Date(startTime), 'HH:mm');
      });

      const allTimes = ['10:00', '11:00', '12:00', '13:00', '14:00'];
      const freeTimes = allTimes.filter(time => !bookedTimes.includes(time));
      setAvailableTimes(freeTimes);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setSelectedTime('');
    if (date) {
      console.log('asdasd');

      fetchAvailableTimes(date);
    } else {
      setAvailableTimes([]);
    }
  };

  const handleBooking = async () => {
    if (selectedDate && selectedTime && email) {
      const dateStr = format(selectedDate, 'yyyy-MM-dd');
      const startTime = new Date(`${dateStr}T${selectedTime}:00`);
      const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); // 1-hour duration

      try {
        // Create a calendar event
        await gapi.client.calendar.events.insert({
          calendarId: CALENDAR_ID,
          resource: {
            summary: 'Massage Appointment',
            description: 'Your massage appointment.',
            start: {
              dateTime: startTime.toISOString(),
              timeZone: 'Europe/Vilnius', // Replace with your time zone
            },
            end: {
              dateTime: endTime.toISOString(),
              timeZone: 'Europe/Vilnius',
            },
            attendees: [{ email }], // Invite the user
          },
        });

        alert();
      } catch (error) {
        console.error('Error creating event:', error);
        alert('Failed to book the appointment. Please try again.');
      }
    } else {
      alert('Please select a date, time, and provide your email!');
    }
  };

  const locale = lang === Lang.LT ? lt : enUS;

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
            onChange={handleDateChange}
            minDate={new Date()}
            maxDate={addDays(new Date(), 30)}
          />

          <Box sx={{ flex: 1 }}>
            <Typography variant='h6' gutterBottom>
              {t('selectTimes')}
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
                <Typography>{t('noTimes')}</Typography>
              )}
            </Grid2>
            <TextField
              label='Email'
              type='email'
              fullWidth
              value={email}
              onChange={e => setEmail(e.target.value)}
              sx={{ mt: 3 }}
            />
            <Button
              variant='contained'
              color='primary'
              sx={{ mt: 3 }}
              disabled={!selectedDate || !selectedTime || !email}
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
