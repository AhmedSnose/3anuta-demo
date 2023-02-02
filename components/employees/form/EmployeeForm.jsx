 // Render Prop
 import React from 'react';
 import { Formik, Form, Field, ErrorMessage , FormikProps } from 'formik';
 import styles from '../css/employees.module.css';
 import { Button, Grid } from '@mui/material';
import HeaderInfoLayOut from '../../../layouts/others/HeaderInfoLayOut'
import ActionButton from '../../../layouts/buttons/ActionButton'
import { toast } from 'react-toastify';
import { useRouter } from 'next/router'
import { useState } from 'react';
import { useEffect } from 'react';
 
export default function EmployeeForm({isAddForm = true , id = 0}){
  const router = useRouter();
  const [employee , setEmployee] = useState([])


  const MyInput = ({ field, form, ...props }) => {
    return <input {...field} {...props} />;
  };

 const sendFormDataToApi = async values => {
    try {
      const response = await fetch('/api/employees/all/add' , {
        method : 'POST',
        body : JSON.stringify({...values, isActive:true}),
        headers:{
          'Content-Type':'application/json'
        }
      })

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


        router.push('/employees/all')

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

 const getEmployeeById = async id => {
  try {
    const response = await fetch('/api/employees/get/employee/'+id)
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


    setEmployee(data.employee[0])

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

useEffect(()=> { 
  (!isAddForm) && (id != 0) && getEmployeeById(id);
} , [])


const updateEmployeeById = async (values , id) => {
  try {
    const response = await fetch('/api/employees/update/employee/'+id , {
      method : 'PUT',
      body : JSON.stringify({...values, isActive:true}),
      headers:{
        'Content-Type':'application/json'
      }
    })

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


      router.push('/employees/all')

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

  if (isAddForm)
      console.log(sendFormDataToApi(values));
   else 
      console.log(updateEmployeeById(values , id));

  setSubmitting(false)
}

return (
  <Formik enableReinitialize
     initialValues={{ email: employee.email ?? '', arabicName: employee.arabicName ?? '' , englishName: employee.englishName ?? '' , mobileNumber: employee.mobileNumber ?? '' , identificationNumber:employee.identificationNumber ?? '' , employeeType:'test'}}

     validate={values => {
       const errors = {};
       
       if (!values.email) {
         errors.email = 'please enter vaild haha';
       } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
         errors.email = 'Invalid email address';
       }
       return errors;
     } }

     onSubmit={addEmployeeSubmitHandler}
   >
     { props => (
        <div className={styles.addEmployeesForm}>
          <HeaderInfoLayOut title={'Employee Info'} color={'#015d5e'}>
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
                    <div className="field__container__cuz rounded-sm flex m-5 shadow-sm">
                      <Field placeholder={'Arabic Name'} type="arabicName" name="arabicName" className="field__container__field__cuz  border-gray-400 rounded-sm flex-auto p-1 font-medium outline-none border focus:border-blue-500 focus:text-gray-500" />
                      <ErrorMessage className='text-red-500' name="arabicName" component="sapn" />
                      {/* <input  placeholder={'Arabic Name'} type="arabicName" name="arabicName" className="field__container__field__cuz  border-gray-400 rounded-sm flex-auto p-1 font-medium outline-none border focus:border-blue-500 focus:text-gray-500" defaultValue="My default value" /> */}
                    </div>

                </Grid>

                <Grid item md={6}>
                    <div className="field__container__cuz rounded-sm flex m-5 shadow-sm">
                      <Field placeholder={'English Name'} type="text" name="englishName" className="field__container__field__cuz  border-gray-400 rounded-sm flex-auto p-1 font-medium outline-none border focus:border-blue-500 focus:text-gray-500" />
                      <ErrorMessage className='text-red-500' name="englishName" component="span" />
                    </div>
                </Grid>

                <Grid item md={6}>
                    <div className="field__container__cuz rounded-sm flex m-5 shadow-sm">
                      <Field placeholder={'Identification Number'} type="number" name="identificationNumber" className="field__container__field__cuz  border-gray-400 rounded-sm flex-auto p-1 font-medium outline-none border focus:border-blue-500 focus:text-gray-500" />
                      <ErrorMessage className='text-red-500' name="Identification Number" component="div" />
                    </div>
                </Grid>

                <Grid item md={6}>
                    <div className="field__container__cuz rounded-sm flex m-5 shadow-sm">
                      <Field placeholder={'Phone Number'} type="number" name="mobileNumber" className="field__container__field__cuz  border-gray-400 rounded-sm flex-auto p-1 font-medium outline-none border focus:border-blue-500 focus:text-gray-500" />
                      <ErrorMessage className='text-red-500' name="mobileNumber" component="div" />
                    </div>
                </Grid>

                <Grid item md={6}>
                    <div className="field__container__cuz rounded-sm flex flex-col m-5 shadow-sm">
                      <Field placeholder={'Email'} type="email" name="email" className="field__container__field__cuz  border-gray-400 rounded-sm flex-auto p-1 font-medium outline-none border focus:border-blue-500 focus:text-gray-500-500 focus:text-gray-500" />
                      <ErrorMessage className='text-red-500 border-none' name="email" component="span" />
                    </div>
                </Grid>


                <Grid item md={6}>

                </Grid>

                <Grid item md={6}>
                  {/* <ActionButton  buttonType={'submit'} color={'blue'} disabled={isSubmitting} type={'add'} text={'Submit'} className='m-5' /> */}
                  <button disabled={props.isSubmitting} type='submit' className='m-5 p-2 text-center cursor-pointer bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold pr-2 text-xs rounded inline-flex items-center'> {isAddForm ? 'Submit' : 'Update'} </button>

                </Grid>
              </Grid>

            
            </Grid>       
          </Form>
        </div>
       )}


     </Formik>
   )
  };
 
 