 import React, { useState } from 'react';
 import { Formik, Form, Field, ErrorMessage } from 'formik';
 import styles from '../css/employees.module.css';
 import { Button, Grid } from '@mui/material';
import HeaderInfoLayOut from '../../../layouts/others/HeaderInfoLayOut'
import ActionButton from '../../../layouts/buttons/ActionButton'
import { toast } from 'react-toastify';
import { useRouter } from 'next/router'
import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';

export default function AgentForm({ status = 'add' }) {
  const router = useRouter();
  const [isActive, setIsActive] = useState('false');

  const selectActiveOrNotOnChangeHandler = (event) => setIsActive(event.target.value)

  const controlProps = (item) => ({
    checked: isActive === item,
    onChange: selectActiveOrNotOnChangeHandler,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  const sendFormDataToApi = async values => {
    // console.log(values);

    try {
      const response = await fetch('/api/employees/agents/add' , {
        method : 'POST',
        body : JSON.stringify(values),
        headers:{
          'Content-Type':'application/json'
        }
      })

      const data = await response.json();

      if (response.status !== 200){
        throw new Error('response.statusText')
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


        router.push('/employees/agents')

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



const addEmployeeSubmitHandler = (values, { setSubmitting } ) => { 

  console.log(sendFormDataToApi({...values , isActive:isActive == 'true'}));

  setSubmitting(false)
}

  return (
    <Formik
       initialValues={{ agentName: '', mobileNumber: '' , identificationNumber: '' , isActive: false}}
  
      //  validate={values => {
      //    const errors = {};
         
      //    if (!values.email) {
      //      errors.email = 'please enter vaild haha';
      //    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      //      errors.email = 'Invalid email address';
      //    }
      //    return errors;
      //  } }
  
       onSubmit={addEmployeeSubmitHandler}
     >
       {({ isSubmitting }) => (
          <div className={styles.addEmployeesForm}>
            <HeaderInfoLayOut title={'Add Agent'} color={'#015d5e'} className='rounded-lg uppercase'>
              <ActionButton type={'back'} text={''} onClick={router.back}/>
              {/* <ActionButton type={'add'} text={'Refresh'} /> */}
            </HeaderInfoLayOut>
  
            <Form>
              <Grid container>
  
                <Grid item md={4}>
                  {/* iamge  */}
                </Grid>
  
                <Grid container>
                  <Grid item md={6}>
                      <div className="field__container__cuz rounded-sm border border-gray-400 flex m-5 shadow-sm">
                        <Field placeholder={'Agent Name'} type="text" name="agentName" className="field__container__field__cuz flex-auto p-1 font-medium outline-none border border-transparent focus:border-green-500 focus:text-green-500" />
                        <ErrorMessage className='text-red-500' name="agentName" component="div" />
                      </div>
                  </Grid>
  
                  <Grid item md={6}>
                      <div className="field__container__cuz rounded-sm border border-gray-400 flex m-5 shadow-sm">
                        <Field placeholder={'Mobile Number'} type="text" name="mobileNumber" className="field__container__field__cuz flex-auto p-1 font-medium outline-none border border-transparent focus:border-green-500 focus:text-green-500" />
                        <ErrorMessage className='text-red-500' name="mobileNumber" component="div" />
                      </div>
                  </Grid>
  
                  <Grid item md={6}>
                      <div className="field__container__cuz rounded-sm border border-gray-400 flex m-5 shadow-sm">
                        <Field placeholder={'Identification Number'} type="text" name="identificationNumber" className="field__container__field__cuz flex-auto p-1 font-medium outline-none border border-transparent focus:border-green-500 focus:text-green-500" />
                        <ErrorMessage className='text-red-500' name="Identification Number" component="div" />
                      </div>
                  </Grid>
  
                  <Grid item md={6} className='flex items-center justify-start'>
                  <Radio
                      {...controlProps('false')}
                      sx={{
                        color: pink[800],
                        '&.Mui-checked': {
                          color: pink[600],
                        },
                      }}
                    />
                  <Radio {...controlProps('true')} />
                  {/* <span className='font-bold uppercase ml-auto'> Select Status </span> */}
                  </Grid>
  
  
                  <Grid item md={6}>
                    {/* <ActionButton  buttonType={'submit'} color={'blue'} disabled={isSubmitting} type={'add'} text={'Submit'} className='m-5' /> */}
                    <button disabled={isSubmitting} type='submit' className='m-5 p-2 text-center cursor-pointer bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold pr-2 text-xs rounded inline-flex items-center'>Submit</button>
  
                  </Grid>
                </Grid>
  
              
              </Grid>       
            </Form>
          </div>
         )}
  
  
       </Formik>
     )
}
