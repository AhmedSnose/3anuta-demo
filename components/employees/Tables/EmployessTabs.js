import { useState , useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DisplayEmployeesList from './DisplayEmployeesList'
import DisplayAgentList  from './DisplayAgentList'

import { useRouter } from 'next/router'
import ActionButton from '../../../layouts/buttons/ActionButton';
import SearchForm from '../search';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
            {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const employessTabsRouteNames = [
  'all',
  'agents',
  'suspendedEmployees',
  'suspendedAgents',
]

export default function EmployessTabs({ rowsData = []}) {

  const router = useRouter()
  const { tab } = router.query
  const [value, setValue] = useState(0);


  useEffect(() => {
    setValue( prev => (typeof tab !== 'undefined') ? prev = employessTabsRouteNames.indexOf(tab) : 0 )
  }, [tab])


  const handleChange = (event , index) => {

    event.preventDefault()
    setValue(index);
    console.log(employessTabsRouteNames[index] , 'employessTabsRouteNames[index]');
    router.push('/employees/'+employessTabsRouteNames[index])
  };

  const openAddEmployessPageHandler = () => router.push('/employees/all/form/add');
  const openAddAgentPageHandler = () => router.push('/employees/agents/form/add');

  const renderAddEmpoyeeButton = <ActionButton onClick={openAddEmployessPageHandler} type={'add'} text={'Add Employee'} className='ml-auto mr-1' />
  const renderAddAgentButton = <ActionButton onClick={openAddAgentPageHandler} type={'add'} text={'Add Agent'}  />

  return (
    <Box sx={{ width: '100%' }}>
        
      { tab === 'all' && <SearchForm />}

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
          // variant="scrollable"
          // scrollButtons
          // allowScrollButtonsMobile
          >

          <Tab label="All Employees" {...a11yProps(0)} />
          <Tab label="All Agents" {...a11yProps(1)} />
          <Tab label="Suspended Employees" {...a11yProps(2)} />
          <Tab label="Suspended Agents" {...a11yProps(3)} />

          { tab === 'all' && renderAddEmpoyeeButton }
          { tab === 'all' && renderAddAgentButton }

        </Tabs>
  
      </Box>

      <TabPanel value={value} index={0}>

           <DisplayEmployeesList metaData={rowsData.metaData} rowsData={rowsData?.employees} />

      </TabPanel>

      <TabPanel value={value} index={1}>
        
          <DisplayAgentList rowsData={rowsData?.agents} />

      </TabPanel>
      <TabPanel value={value} index={2}>

           <DisplayEmployeesList rowsData={rowsData?.employees} />

      </TabPanel>
      <TabPanel value={value} index={3}>

          <DisplayAgentList rowsData={rowsData?.agents} />

      </TabPanel>
    </Box>
  );
}
