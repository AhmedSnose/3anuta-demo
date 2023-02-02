import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';


export default function PriceTable({averageOfInvoicesValues , totalOfInvoicesValues}) {
  return (

    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell><Typography className='font-semibold' variant="h6" component="h2"> Average Of Invoices Values </Typography> </TableCell>
          <TableCell align="right"> <Typography className='font-semibold' variant="h6" component="h2"> Total Of Invoices Values </Typography></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        
          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row" className='font-semibold'>
              {averageOfInvoicesValues}
            </TableCell>

            <TableCell component="th" scope="row" className='font-semibold'>
              {totalOfInvoicesValues}
            </TableCell>

          </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
  )
}
