import { Grid } from '@mui/material'
import React from 'react'
import HeaderInfoLayOut from '../../../layouts/others/HeaderInfoLayOut'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect , useState } from 'react';
import { toast } from 'react-toastify';
import { convertObjectIntoQueryString } from '../../../helpers/functions/functions'



export default function SearchForm() {

    const [allEmployeesLookUps , setAllEmployeesLookUps] = useState([]) 


    const [inputValue , setInputValue] = useState('hi') 

    const getEmployeeBySearchValue = async searchValue => {
        try {
        const response = await fetch('/api/employees/lookUps/employees'+ convertObjectIntoQueryString({searchValue:searchValue}))
        const data = await response.json();
    
        if (response.status !== 200){
            throw new Error(response.statusText)
        }
    
        if (data.message)
        toast.info(data.message ?? 'info', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
            }); 
    
    
        setAllEmployeesLookUps(data.employees)
    
        } catch ({ message }) {
        toast.error(message ?? 'error', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
            });
        }
    
    }

    const autoCompleteOnChangeHandler = (e,selectedValue) => {
        
        console.log(selectedValue);
    }

    const inputOnChageHandler = (e)=> {
        setInputValue(e.target.value)

        if (e.target.value.length >= 2) {
             getEmployeeBySearchValue(e.target.value);
        }

        
    }
        

  return (
    <div className='bg-white shadow-lg rounded-lg p-1 mb-12'>
        <HeaderInfoLayOut className='m-0 rounded-lg' title={'Search'} color={'#015d5e'} />
        <Grid container className='space-x-2 py-1 my-4 ml-2'>

            <Grid item sm={12}>
                <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                    {/* <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" /> */}


                    <Autocomplete
                        // disablePortal
                        id="combo-box-demo"
                        options={allEmployeesLookUps}
                        getOptionLabel={(option) => {

                            // Value selected with enter, right from the input
                            if (typeof option === 'string') {
                              return option;
                            }

                            // Regular option
                            return option.lable;
                          }}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField value={inputValue} onChange={inputOnChageHandler} {...params} label="Employee Name" />}
                        onChange={ autoCompleteOnChangeHandler}
                    />

                    
                </div>
            </Grid>

            <Grid item sm={4}>
                <div className="input-group relative flex flex-wrap items-stretch">
                    <button className="btn px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                    </button>
                </div>
            </Grid>

        </Grid>
              
                
    </div>
  )
}

