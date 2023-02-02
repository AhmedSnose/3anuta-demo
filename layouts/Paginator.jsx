import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { getArrayOfDefaultPageSizes , getDefaultPageSize } from '../helpers/functions/functions';
import { useRouter } from 'next/router'

const arrayOfDefaultPageSizes = getArrayOfDefaultPageSizes();

export default function Paginator({url ='' , className = '' , count}) {

  const [selectedCurrentPage, setSelectedCurrentPage] = useState(1);
  
  const router = useRouter();
  const  { pageSize , tab} = router.query;
  const defaultPageSize = pageSize ? pageSize : getDefaultPageSize();
  const [selectedpageSize, setSelectedPageSize] = useState(defaultPageSize);

  useEffect(() => {
    setSelectedCurrentPage(1);
    setSelectedPageSize(defaultPageSize);
  }, [tab])
  

  const pageSizeOnChange = (event, selectedPageSizeComponent) => {
    setSelectedPageSize(selectedPageSizeComponent.props.value);
    router.push(`${url}/?pageSize=${selectedPageSizeComponent.props.value}&currentPage=${selectedCurrentPage}`)
  }

  const paginatorOnChangeHandler = (event , selectedPage) => {
    setSelectedCurrentPage(selectedPage);
    router.push(`${url}/?pageSize=${selectedpageSize}&currentPage=${selectedPage}`)
  };

  
  return (
    <Stack className='flex flex-row justify-between items-center space-x-2' spacing={2}>
        <Pagination shape="rounded" variant="outlined" className={`${className} bg-white pl-3 py-4 my-5 rounded-lg w-full`} count={count} onChange={paginatorOnChangeHandler} />

        <FormControl style={{marginTop:0}} className='bg-white rounded-lg w-3/12 h-full'>
        <Select
        className='m-0 py-1 border rounded-lg border-[#fff]'
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={selectedpageSize}
          placeholder={'Page Size'}
          onChange={pageSizeOnChange}
        >
          <MenuItem disabled value={defaultPageSize}> Select Page Size - ({defaultPageSize})</MenuItem>
          {arrayOfDefaultPageSizes.map( item => <MenuItem key={item} value={item}>{item}</MenuItem> )}

        </Select>
      </FormControl>
    </Stack>  
  )
}
