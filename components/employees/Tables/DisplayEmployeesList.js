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
import Loader from '../../../layouts/loaders/Loader';

import { useDispatch } from 'react-redux'
import { closeModal , openModal , setModalConfig} from '../../../store/slices/modalSlice'
import { DialogContentText } from '@mui/material';
import { useRouter } from 'next/router'



const allEmployeesTableHeadsLabe = [ { action: 'Action', id: 'Id', arabicName:'Arabic Name' , englishName:'English Name' , email:'Email' , employeeType:'Employee Type' , identificationNumber:'Identification Number' , createdAt:'CreatedAt' , isActive:'IsActive' } ];
export default function DisplayEmployeesList({ metaData , rowsData = []}) {
  
  const router = useRouter();
  const dispatch = useDispatch();

  
  const sortBy = event => {
    const sortedBy = Object.keys(allEmployeesTableHeadsLabe[0])[event.target.id];
    console.log(sortedBy);
    // do the sort from UI
  }

  const suspendEmployeeById = (id) => {
    console.log(id);

    dispatch(setModalConfig({
      title : "Suspend Employee By Id" + id,
      description : "description...",
      body : {
        type : 'DialogContentText',
        text: 'Hi From description'
      },
      buttons : [
        {title: 'Suspend' , callBack: ()=> dispatch(closeModal()) },
        {title: 'Close' , callBack: ()=> dispatch(closeModal()) }
      ]
    }))
    
    dispatch(openModal())
    
  }
 
  const openUpdateEmployeeByIdForm = id => router.push('/employees/all/form/update/'+id)


  return (rowsData?.length !== 0) || (typeof rowsData === 'undefined')  ? (
    <>
  <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    
    <TableHead className='bg-[#00aa90]'>
      <TableRow>

    {Object.values(allEmployeesTableHeadsLabe[0]).map( (lable , i) => (
        <TableCell onClick={sortBy} className='cursor-pointer font-semibold text-gray-50' key={lable} id={i}> {lable} </TableCell>
      ))}

      </TableRow>
    </TableHead>

    <TableBody>

    {rowsData.map((row) => (
        <StyledTableRow key={row.id}>
          <StyledTableCell>
              <span className='flex flex-row '>
                <GetIconByName title={'Edit'} iconName={'pencil'} onClick={openUpdateEmployeeByIdForm.bind(this , row.id)} />
                <GetIconByName  title={'send temp password'} iconName={'send'} />
                <GetIconByName  title={'Suspend'} iconName={'suspend'} onClick={suspendEmployeeById.bind(this , row.id)}/>
              </span>
          </StyledTableCell>

          <StyledTableCell>
            {row.id}
          </StyledTableCell>
          <StyledTableCell> <span> {row.arabicName ?? '-' }</span></StyledTableCell>
          <StyledTableCell> <span> {row.englishName ?? '-'}</span></StyledTableCell>

          <StyledTableCell> <span> {row.email ?? '-'}</span></StyledTableCell>
          <StyledTableCell> <span> {row.employeeType ?? '-'} </span></StyledTableCell>
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
</>
  ) : ( 
      <Loader intervalTime={5000}/>
    )
  
}
