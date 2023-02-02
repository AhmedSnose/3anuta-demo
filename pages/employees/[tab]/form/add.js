import { useRouter } from 'next/router'
import EmployeeForm from '../../../../components/employees/form/EmployeeForm';
import AgentForm from '../../../../components/employees/form/AgentForm';


export default function add() {
  const router = useRouter();
  const  { tab } = router.query;

  const tabsNameThatHaveAddForm = [
    'all',
    'agents'
  ]

  // after end with this page please handle the diffrent routes => <ErrorPage statusCode={404}/>
  

  return (tab === 'all' && <EmployeeForm />) || (tab === 'agents' && <AgentForm />)

}
