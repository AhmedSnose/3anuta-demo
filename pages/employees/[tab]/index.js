import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import EmployessTabs from '../../../components/employees/Tables/EmployessTabs';
import { toast } from 'react-toastify';
import styles  from '../../../components/employees/css/employees.module.css';
import Paginator from '../../../layouts/Paginator';
import { convertObjectIntoQueryString } from '../../../helpers/functions/functions'

export default function index() {

    const router = useRouter();
    const  { tab  } = router.query;
    const [fetchedDataFromApi , setFetchedDataFromApi] = useState();   
    const [selectedCurrentPage, setSelectedCurrentPage] = useState(1);

    // const paginatorOnChangeHandler = (event , selectedPage) => {
    //   setSelectedCurrentPage(selectedPage);
    //   selectedCurrentPage && router.push(`/employees/all/?pageSize=2&currentPage=${selectedCurrentPage}`)
    // };

// console.log(tab , selectedCurrentPage);
    useEffect( () => {      
      console.log('call');
      const fetchEmployess = async () => {
        try {
          const response = await fetch(`/api/employees/${tab + convertObjectIntoQueryString(router.query)}`);
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
          
          setFetchedDataFromApi(data)
    
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

      tab && fetchEmployess();
    }, [router.query])
    
  return fetchedDataFromApi && (
    <div className={`${styles.employees} h-9`}>
      <EmployessTabs rowsData={fetchedDataFromApi} />
      <Paginator url={'/employees/'+tab} className={''} count={fetchedDataFromApi.metaData?.totalPages} currentPage={fetchedDataFromApi.metaData?.currentPage} />
    </div>
  )
}
