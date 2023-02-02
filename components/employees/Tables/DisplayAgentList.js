import Table     from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow  from '@mui/material/TableRow';
import Paper     from '@mui/material/Paper';
import { StyledTableCell , StyledTableRow } from '../../../helpers/functions/Libraries'
import DisplayAlertByStatus from '../../../layouts/others/DisplayAlertByStatus';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import  GetIconByName from '../../../layouts/others/GetIconByName'


const allAgentsTableHeadsLabe = [ { action: 'Action', id: 'Id', agentName:'Agent Name' , mobileNumber:'Mobile Number' , employeeType:'Employee Type' , identificationNumber:'Identification Number' , createdAt:'CreatedAt' , isActive:'IsActive' } ];

export default function DisplayAgentList({ rowsData = []}) {

  // console.log(rowsData);

  return (rowsData?.length !== 0) || (typeof rowsData === 'undefined')  ? (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
    
    <TableHead className='bg-[#00aa90]'>
      <TableRow>

    {Object.values(allAgentsTableHeadsLabe[0]).map( (lable) => (
        <TableCell className='font-semibold text-gray-50' key={lable} id={'head'+lable}> {lable} </TableCell>
      ))}

      </TableRow>
    </TableHead>

    <TableBody>

    {rowsData.map((row) => (
        <StyledTableRow key={row.id}>
          <StyledTableCell>
              <span className='flex flex-row '>
                <GetIconByName title={'Edit'} iconName={'pencil'} />
                <GetIconByName  title={'send temp password'} iconName={'send'} />
                <GetIconByName  title={'Suspend'} iconName={'suspend'} />
              </span>
          </StyledTableCell>



          <StyledTableCell>
            {row.id}
          </StyledTableCell>
          <StyledTableCell> <span> {row.agentName ?? '-' }</span></StyledTableCell>
          <StyledTableCell> <span> {row.mobileNumber ?? '-'}</span></StyledTableCell>

          <StyledTableCell> <span> {row.employeeType ?? '-'}</span></StyledTableCell>
          <StyledTableCell> <span> {row.identificationNumber ?? '-'} </span></StyledTableCell>

          <StyledTableCell> <span> {row.createdAt ?? '-'} </span></StyledTableCell>
          <StyledTableCell> 
              {row.isActive ? <CheckOutlinedIcon className='text-green-500' /> : <ClearOutlinedIcon className='text-red-500'/> }
          </StyledTableCell>

        </StyledTableRow>
      ))}


    </TableBody>
  </Table>
</TableContainer>
  ) : (<DisplayAlertByStatus color={'orange'} > There Is No Agents </DisplayAlertByStatus>)
  
}
