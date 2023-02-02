import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Piechart from './Piechart';
import PriceTable from './PriceTable';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/ar-sa';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
// import Deposits from './Deposits';
// import Orders from './Orders';
import { useState } from 'react';
import { Stack } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="left" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function index() {
  const averageOfInvoicesValues = 120;
  const totalOfInvoicesValues = 100;
  const [local, setLocal] = useState('ar-sa')
  const [value, setValue] = useState()
  
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>

              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 500,
                  }}
                >

                  <Piechart />

                </Paper>
              </Grid>
              
              {/* Date Range */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 230,
                  }}
                >

  <LocalizationProvider  dateAdapter={AdapterDayjs} 
    adapterLocale={'ar-sa'}
  >
      <Stack spacing={6}>

        <DatePicker
          label="From"
          value={value}
          onChange={handleChange}

          components={{
            OpenPickerIcon: CallMadeIcon
          }}

          renderInput={ (params) => <TextField {...params}/>}
        />

        <DatePicker OpenPickerIcon={<span>Left</span>}
          label="To"
          value={value}
          onChange={handleChange}

          components={{
            OpenPickerIcon: CallReceivedIcon
          }}


          // components={{
          //   OpenPickerIcon: MoreTimeIcon,
          //   LeftArrowIcon: ArrowBackIcon,
          //   RightArrowIcon: ArrowForwardIcon,
          //   SwitchViewIcon: ChangeCircleIcon
          // }}

          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>

                </Paper>
              </Grid>



              {/* Prices */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <PriceTable totalOfInvoicesValues={totalOfInvoicesValues} averageOfInvoicesValues={averageOfInvoicesValues} />                  
                </Paper>

              </Grid>

              
            </Grid>

            <Copyright  sx={{ pt: 4}} />

          </Container>
    </div>
  )
}
